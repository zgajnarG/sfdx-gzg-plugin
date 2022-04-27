import { UX } from '@salesforce/command';
import * as fs from '../helpers/files';
import Traduction from '../interfaces/translate';

export default class TranslationHandler {
  protected console: UX;
  protected primary: Traduction;
  protected secondaries: Traduction[];
  protected apiName: string;
  protected categorie: string;

  public constructor(console: UX, primary: string, secondaries: string, categorie: string) {
    this.console = console;
    this.primary = this.getTraductions(primary)[0];
    this.apiName = this.primary.traduction.replaceAll(' ', '_').replaceAll("'", '_')
    this.secondaries = this.getTraductions(secondaries);
    this.categorie = categorie;
  }

  public async createCustomLabel(): Promise<void> {
    const fileName = 'CustomLabels.labels-meta.xml';
    const path = await fs.seekFilesFromDir('force-app', [fileName]);
    if (path) {
      const fileData = await fs.getJSONFromXMLFile(path[0]);
      const fileJSON = JSON.parse(fileData);
      fileJSON.CustomLabels.labels.push(this.createCustomLabelXML());
      fs.writeToXMLFileWithJSON(path[0], JSON.stringify(fileJSON));
    }
  }

  public async createTranslations(): Promise<void> {
    for (const secondary of this.secondaries) {
      const fileName = `${secondary.language}.translation-meta.xml`;
      const path = await fs.seekFilesFromDir('force-app', [fileName]);
      const fileData = fs.getJSONFromXMLFile(path[0]);
      const fileJSON = JSON.parse(fileData);
      fileJSON.Translations.customLabels.push(this.createTranslationXML(secondary.traduction));
      fs.writeToXMLFileWithJSON(path[0], JSON.stringify(fileJSON));
    }
  }

  private createCustomLabelXML(): any{
    return {
      fullName: {
        _text: this.apiName,
      },
      categories: {
        _text: this.categorie,
      },
      language: {
        _text: this.primary.language,
      },
      protected: {
        _text: 'true',
      },
      shortDescription: {
        _text: this.primary.traduction,
      },
      value: {
        _text: this.primary.traduction,
      },
    };
  }

  private createTranslationXML(traduction: string): any {
    return {
      label: {
        _text: traduction,
      },
      name: {
        _text: this.apiName,
      },
    };
  }

  private getTraductions(traduction: string): Traduction[] {
    const allTaductions = traduction.split(',');
    return allTaductions.map((trad) => {
      const data = trad.split(':');
      return {
        language: data[0],
        traduction: data[1],
      };
    });
  }
}
