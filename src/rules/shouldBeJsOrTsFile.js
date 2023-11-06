const JS_EXTENSION = ".js";
const TS_EXTENSION = ".ts";

/**
 * 
 * @param {string} fileName 
 * @returns {boolean}
 */
export const shouldBeJsOrTsFile = function(fileName){
    return fileName.includes(JS_EXTENSION) || fileName.includes(TS_EXTENSION);
}