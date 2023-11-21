import fs from 'fs';
import path from "path";
import { reportOnError } from './reportOnError.js';

/**
 * 
 * @param {string} filepath 
 * @returns 
 */
export const getRealFilename = function (filepath) {
    return new Promise(function (resolve, reject) {
        const DIR_NAME = path.dirname(filepath);
        const FILE_NAME = path.basename(filepath);
        fs.readdir(DIR_NAME, async function (err, filenames) {
            if (err) {
                reject(err);
            }
            for (let filename of filenames) {
                if (filename.toUpperCase() == FILE_NAME.toUpperCase()) {
                    resolve(filename);
                }
            }
        })
    })

}