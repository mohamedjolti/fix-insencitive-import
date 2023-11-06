import { reportOnError } from "./tools/reportOnError.js";

/**
 * 
 * @param {array<function(data)>} rules 
 * @returns {boolean}
 */
export const checkRules = function (rules, data) {
    try {
        for (let rule of rules) {
            if (!rule(data)) {
                return false;
            }
        }
        return true;
    } catch (error) {
        reportOnError(error);
        return false;
    }
}