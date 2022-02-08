import { flags, SfdxCommand } from '@salesforce/command';
import { Messages } from '@salesforce/core';
import OrgHandler from '../../../classes/OrgHandler';
import Task from '../../../interfaces/taskResult';
import { createOrgData, createUserPasswordData } from '../../../interfaces/commandsResult';

// Initialize Messages with the current plugin directory
Messages.importMessagesDirectory(__dirname);

// Load the specific messages for this file. Messages from @salesforce/command, @salesforce/core,
// or any library that is using the messages framework can also be loaded this way.

export default class create extends SfdxCommand {
  public static description = 'Create a scratch org and push automatically sources into it';

  public static args = [{ name: 'file' }];

  protected static requiresUsername = false;

  // Comment this out if your command does not support a hub org username
  protected static supportsDevhubUsername = false;

  // Set this to true if your command requires a project workspace; 'requiresProject' is false by default
  protected static requiresProject = true;

  protected static flagsConfig = {
    // flag with a value (-n, --name=VALUE)
    name: flags.string({ char: 'n', description: 'Scratch Org name', required: true }),
    open: flags.boolean({ char: 'o', description: 'Open scratch org after the sources push' }),
    permsetname: flags.string({ char: 's', description: 'Add permission set to user' }),
    help: flags.help({}),
  };

  public async run(): Promise<Result> {
    const orgName: string = this.flags.name as string;
    const orgHandler: OrgHandler = new OrgHandler(this.ux);
    const result: Result = { orgId: null, username: null, password: null };

    const resultCreateScratch: Task<createOrgData> = await orgHandler.createScratch(orgName);

    if (resultCreateScratch.success) {
      const resultPushToScratch: Task<unknown> = await orgHandler.pushToScratch();
      result.orgId = resultCreateScratch.result.orgId;
      result.username = resultCreateScratch.result.username;

      const resultPasswordUser: Task<createUserPasswordData> = await orgHandler.createUserPassword();
      result.password = resultPasswordUser.result.password;

      if (resultPushToScratch.success) {
        if (this.flags.permsetname) await orgHandler.addUserPermissionSet(this.flags.permsetname as string);
      }
      if (this.flags.open) await orgHandler.openScratch();
    }
    return result;
  }
}

interface Result {
  orgId: string;
  username: string;
  password: string;
}
