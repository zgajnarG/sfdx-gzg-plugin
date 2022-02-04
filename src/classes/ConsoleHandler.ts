import { UX } from '@salesforce/command';
import { Error } from '../interfaces/commandsResult';
import ConsoleInterface, { ConsoleTask } from '../interfaces/console';

export default class ConsoleHandler {
  protected console: UX;

  public constructor(console: UX) {
    this.console = console;
  }

  public async lunchTask(
    startMessage: string,
    task: Promise<ConsoleInterface>,
    endMessage: string
  ): Promise<ConsoleTask> {
    let result: ConsoleTask;
    this.console.startSpinner(startMessage);

    try {
      const resultTask = await task;
      result = { stdout: resultTask.stdout, stderr: resultTask.stderr, success: true };
    } catch (error) {
      const errorParsed = JSON.parse(JSON.stringify(error)) as Error;
      result = { stdout: errorParsed.stdout, stderr: errorParsed.stderr, success: false };
    }
    if (result.success) this.console.stopSpinner(endMessage);
    return result;
  }

  public stopSpinner(message: string): void {
    this.console.stopSpinner(message);
  }

  public log(message: string): void {
    this.console.log(message);
  }
}
