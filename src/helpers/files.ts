import * as fs from 'fs';
import * as glob from 'glob';
import * as xmljs from 'xml-js';

export const seekFilesFromDir = (startPath: string, filenames: string[]): Promise<string[]> => {
  return new Promise((resolve, reject) => {
    const newFiles = [];
    for (const filename of filenames) {
      const data = glob.sync(startPath + '/**/' + filename, {});
      if (data) newFiles.push(...data);
      else reject('No files found');
    }
    resolve(newFiles);
  });
};

export const getJSONFromXMLFile = (filePath: string): string => {
  const xmlFromFile = fs.readFileSync(filePath, 'utf8');
  const options = { ignoreComment: true, alwaysChildren: true, compact: true };
  const result = xmljs.xml2json(xmlFromFile, options);
  return result;
};

export const writeToXMLFileWithJSON = (filePath: string, json: string): void => {
  const options = { compact: true, ignoreComment: true, indentCdata: true, spaces: '\t' };
  const result = xmljs.json2xml(json, options);
  fs.writeFileSync(filePath, result, 'utf8');
};
