/**
 * 
 * @param {array<function(data)>} rules 
 * @returns {boolean}
 */
export const checkRules = function(rules ,data){
  for(let rule of rules){
     if(!rule(data)){
        return false;
     }
  }
  return true;
}