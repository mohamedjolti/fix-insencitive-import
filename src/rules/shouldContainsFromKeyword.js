
const FROM_KEYWORD = "from";
/**
 * 
 * @param {string} line 
 * @returns {boolean}
 */
export const shouldContainsFromKeyword = function(line){
    return line.includes(FROM_KEYWORD);
}