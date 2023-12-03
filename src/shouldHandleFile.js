import { checkRules } from "./checkRules.js"
import { shouldBeJsOrTsFile } from "./rules/shouldBeJsOrTsFile.js";

const handleFileRules = [
 shouldBeJsOrTsFile
];

/**
 * 
 * @param {string} filename 
 * @returns {boolean}
 */
export const shouldHandleFile = function(filename){
    /**
     * Add rules to be checked in order to handle a file
     */
    return checkRules(handleFileRules ,filename);
}


export const addHandleFileRule = function(call){
    handleFileRules.push(call);
}