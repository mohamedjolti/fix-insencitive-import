import fs from 'fs';
import path from "path";
import { JS_EXTENSION, TS_EXTENSION } from '../constants.js';
import { reportOnError } from './reportOnError.js';

/**
 * 
 * @param {string} filepath 
 * @returns {Promise}
 */
export const getRealFilename = function (filepath) {
    return new Promise(function (resolve, reject) {
        const DIR_NAME = path.dirname(filepath);
        const FILE_NAME = path.basename(filepath);
        fs.readdir(DIR_NAME, async function (err, filenames) {
            if (err) {
                reject(err);
            }
            if(filenames){
                for (let filename of filenames) {
                    if (removeExtension(filename).toUpperCase() == removeExtension(FILE_NAME).toUpperCase()) {
                        resolve(filename);
                    }
                }
            }
            resolve(false)
        })
    })

}

/**
 * Maybe the import is without extension  "import from 'foo' " and the real file is foo.js
 * @param {string} filename 
 * @returns {string}
 */
const removeExtension = function(filename){
    if(filename.includes(JS_EXTENSION)){
       return filename.replace(JS_EXTENSION , "");
    }else if(filename.includes(TS_EXTENSION)){
        return filename.replace(TS_EXTENSION, "");
    }else{
        return filename;
    }
}