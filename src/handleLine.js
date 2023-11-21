import { isFileExists } from "./tools/isFileExists.js";
import path from "path";
import { PATH_SEPARTOR } from "./constants.js";
import { getRealFilename } from "./tools/getRealFilename.js";
import { reportOnError } from "./tools/reportOnError.js";

const SINGLE_QUOTE = "'";
const DOUBLE_QUOTE = '"';

/**
 * 
 * @param {string} line 
 * @param {string} fileName 
 * @returns 
 */
export const handleLine = function (line, fileName) {
    const lineFilePath = getPathFromLine(line);
    const orginalFilePath = path.dirname(fileName);
    const lineFileBaseName = path.basename(lineFilePath);
    const realPath = orginalFilePath + PATH_SEPARTOR + lineFilePath;
    return getRealFilename(realPath).then((realFileName) => {
        if (realFileName) {
            return line.replace(lineFileBaseName, realFileName);
        }
    }).catch(error => reportOnError(error));
}


/**
 * 
 * @param {string} line 
 * @returns {string}
 */
const getPathFromLine = function (line) {
    return line.includes(SINGLE_QUOTE) ? line.split(SINGLE_QUOTE)[1].split(SINGLE_QUOTE)[0] : line.split(DOUBLE_QUOTE)[1].split(DOUBLE_QUOTE)[0]
}