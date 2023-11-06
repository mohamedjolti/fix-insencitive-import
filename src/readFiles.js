import { processFile } from "./processFile.js";
import fs, { cp } from 'fs';
import { PATH_SEPARTOR } from "./constants.js";
import { reportOnError } from "./tools/reportOnError.js";
import { Logger } from "./logger/Logger.js";
import { shouldHandleFile } from "./shouldHandleFile.js";

/**
 * 
 * @param {string} dirname 
 * @param {Logger} logger
 */
export const readFiles = async function (dirname, logger) {
  fs.readdir(dirname, async function (err, filenames) {
    if (err) {
      reportOnError(err)
      return;
    }
    for (const filename of filenames) {
      const FULL_PATH = dirname + PATH_SEPARTOR + filename;
      if (isFile(FULL_PATH) && shouldHandleFile(filename)) {
        await processFile(FULL_PATH, logger);
      } else if (isDirectory(FULL_PATH)) {
        await readFiles(FULL_PATH, logger);
      }
    }
  })
}

/**
 * 
 * @param {string} directoryPath 
 * @returns {boolean}
 */
const isDirectory = function (directoryPath) {
  return fs.lstatSync(directoryPath).isDirectory();
}

/**
 * 
 * @param {string} filePath 
 * @returns {boolean} 
 */
const isFile = function (filePath) {
  return fs.lstatSync(filePath).isFile();
}
