import { isFileExists } from "./tools/isFileExists.js";
import path from "path";
import { PATH_SEPARTOR } from "./constants.js";

const SINGLE_QUOTE = "'";
const DOUBLE_QUOTE = '"';

/**
 * 
 * @param {string} line 
 * @param {string} fileName 
 * @returns 
 */
export const handleLine = function(line, fileName){
    const filePath = getPathFromLine(line);
    const orginalFilePath = path.dirname(fileName);
    const realPath = orginalFilePath + PATH_SEPARTOR + filePath;
    console.log(isFileExists(realPath));
    return line;
}


/**
 * 
 * @param {string} line 
 * @returns {string}
 */
const getPathFromLine = function(line){
    return line.includes(SINGLE_QUOTE) ? line.split(SINGLE_QUOTE)[1].split(SINGLE_QUOTE)[0]: line.split(DOUBLE_QUOTE)[1].split(DOUBLE_QUOTE)[0] 
}