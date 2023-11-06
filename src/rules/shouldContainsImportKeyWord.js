
const IMPORT_KEYWORD = "import";
/**
 * 
 * @param {string} line 
 * @returns {boolean}
 */
export const shouldContainsImportKeyword = function(line){
    return line.includes(IMPORT_KEYWORD);
}