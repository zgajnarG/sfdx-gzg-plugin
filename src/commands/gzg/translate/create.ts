import { flags, SfdxCommand } from '@salesforce/command';
import { Messages } from '@salesforce/core';
import TranslationHandler from '../../../classes/TranslationHandler';

Messages.importMessagesDirectory(__dirname);

export default class create extends SfdxCommand {
  public static description = 'Create traductions in files';

  public static args = [{ name: 'file' }];

  protected static requiresUsername = false;

  protected static supportsDevhubUsername = false;

  protected static requiresProject = true;

  protected static flagsConfig = {
    principal: flags.string({ char: 'p', description: 'traduction in custom label', required: true }),
    secondaries: flags.string({ char: 's', description: 'Secondary traductions', required: true }),
    category: flags.string({ char: 'c', description: 'Category of the custom label' }),
    help: flags.help({}),
  };

  public async run(): Promise<boolean> {
    const handler = new TranslationHandler(
      this.ux,
      this.flags.principal as string,
      this.flags.secondaries as string,
      this.flags.category ? (this.flags.category as string) : ''
    );
    await handler.createCustomLabel();
    await handler.createTranslations();
    return true;
  }
}
