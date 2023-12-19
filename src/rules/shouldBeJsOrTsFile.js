import { JS_EXTENSION, TS_EXTENSION } from "../constants.js";

/**
 * be carful of .json or .tsconfig for example 
 * the last three letters should be .js or .ts
 * @param {string} fileName 
 * @returns {boolean}
 */
export const shouldBeJsOrTsFile = function(fileName){
    const FILENAME_LENGTH = fileName.length;
    if(FILENAME_LENGTH > 2){
       return fileName.substring(FILENAME_LENGTH - 3) == JS_EXTENSION || fileName.substring(FILENAME_LENGTH - 3) == TS_EXTENSION; 
    }
    return false;
}