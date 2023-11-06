import { Logger } from "../logger/Logger.js";

/**
 * 
 * @param {string} error 
 * @param {Logger|null} logger
 */
export const reportOnError = function(error, logger){
    if(logger){
        return logger.log(error)
    }
    console.log(error);
}