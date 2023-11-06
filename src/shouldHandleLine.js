import { checkRules } from "./checkRules.js"
import { shouldContainsFromKeyword } from "./rules/shouldContainsFromKeyword.js";
import { shouldContainsImportKeyword } from "./rules/shouldContainsImportKeyWord.js";

/**
 * 
 * @param {string} line 
 * @returns {boolean}
 */
export const shouldHandleLine = function(line){
    return checkRules([
        shouldContainsImportKeyword,
        shouldContainsFromKeyword
    ], line);
}