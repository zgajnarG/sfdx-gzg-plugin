/* eslint-disable @typescript-eslint/unbound-method */
import * as child from 'child_process';
import * as util from 'util';
import { UX } from '@salesforce/command';
import ConsoleInterface , {ConsoleTask} from '../interfaces/console';
import Task from '../interfaces/taskResult';
import {
  resultCreateOrg,
  resultCreateUserPassword,
  createUserPasswordData,
  createOrgData,
} from '../interfaces/commandsResult';
import Console from './ConsoleHandler';

export default class OrgHandler {
  protected console: Console;

  public constructor(console: UX) {
    this.console = new Console(console);
  }

  public async createScratch(orgName: string): Promise<Task<createOrgData>> {
    const query = `sfdx force:org:create -a ${orgName} -s -f config/project-scratch-def.json -w 10 -d 30 --json`;
    const waitingMessage = `Creating scratch org ${orgName} in progress`;
    const errorMessage = 'Error while creating scratch org';

    const result = await this.handleTask(query, waitingMessage, errorMessage);
    if (!result.success) {
      this.console.log(result.result);
    } else {
      const resultCreateScratch = JSON.parse(result.result) as resultCreateOrg;
      return { success: result.success, result: resultCreateScratch.result };
    }
  }

  public async pushToScratch(): Promise<Task<string>> {
    const query = 'sfdx force:source:push';
    const waitingMessage = 'Pushing sources in progress';
    const errorMessage = 'Error while pushing sources in scratch org';
    const result = await this.handleTask(query, waitingMessage, errorMessage);
    if (!result.success) {
      this.console.log(result.result);
    }
    return result;
  }

  public openScratch(): Promise<Task<string>> {
    const query = 'sfdx force:org:open';
    const waitingMessage = 'Opening scratch org...';
    const errorMessage = 'Error while opening scratch org';
    return this.handleTask(query, waitingMessage, errorMessage);
  }

  public async createUserPassword(): Promise<Task<createUserPasswordData>> {
    const query = 'sfdx force:user:password:generate --json';
    const waitingMessage = 'Creating user password...';
    const errorMessage = 'Error while creating user password...';

    const result = await this.handleTask(query, waitingMessage, errorMessage);
    if (result.success) {
      const resultStdout = JSON.parse(result.result) as resultCreateUserPassword;
      this.console.log(' ');
      this.console.log(`Username : "${resultStdout.result.username}"`);
      this.console.log(`Password : "${resultStdout.result.password}"`);
      this.console.log(' ');
      return { success: result.success, result: resultStdout.result };
    } else {
      return { success: false, result: null };
    }
  }

  public async addUserPermissionSet(permissionSetName: string): Promise<Task<string>> {
    const query = `sfdx force:user:permset:assign -n ${permissionSetName}`;
    const waitingMessage = `Adding ${permissionSetName} permission set to user...`;
    const errorMessage = 'Error while setting user permission set...';
    return this.handleTask(query, waitingMessage, errorMessage);
  }

  private async handleTask(query: string, waitingMessage: string, errorMessage: string): Promise<Task<string>> {
    const exec = util.promisify(child.exec);
    const result: Task<string> = { success: false, result: null };
    try {
      const task: Promise<ConsoleInterface> = exec(query) as Promise<ConsoleInterface>;

      const resultCreate: ConsoleTask = await this.console.lunchTask(waitingMessage, task, 'done');
      result.result = resultCreate.stdout ?? resultCreate.stderr;
      if (!resultCreate.success) {
        this.console.stopSpinner(errorMessage);
      } else {
        result.success = true;
      }
    } catch (err) {
      this.console.stopSpinner(errorMessage);
    }
    return result;
  }
}
