import { checkRules } from "./checkRules.js"
import { shouldBeJsOrTsFile } from "./rules/shouldBeJsOrTsFile.js";

/**
 * 
 * @param {string} filename 
 * @returns {boolean}
 */
export const shouldHandleFile = function(filename){
    /**
     * Add rules to be checked in order to handle a file
     */
    return checkRules([
        shouldBeJsOrTsFile
    ],filename);
}