import { SINGLE_QUOTE , DOUBLE_QUOTE } from "../constants.js";

/**
 * 
 * @param {string} line 
 * @returns {string}
 */
export const getPathFromLineImport = function (line) {
    return line.includes(SINGLE_QUOTE) ? line.split(SINGLE_QUOTE)[1].split(SINGLE_QUOTE)[0] : line.split(DOUBLE_QUOTE)[1].split(DOUBLE_QUOTE)[0]
}