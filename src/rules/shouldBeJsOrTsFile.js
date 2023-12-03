import { JS_EXTENSION, TS_EXTENSION } from "../constants.js";

/**
 * 
 * @param {string} fileName 
 * @returns {boolean}
 */
export const shouldBeJsOrTsFile = function(fileName){
    return fileName.includes(JS_EXTENSION) || fileName.includes(TS_EXTENSION);
}