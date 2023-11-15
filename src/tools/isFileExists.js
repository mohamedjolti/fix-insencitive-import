import fs from 'fs';

/**
 * 
 * @param {string} pathToFile
 * @returns {boolean} 
 */
export const isFileExists = function(pathToFile){
  return fs.existsSync(pathToFile);
}