import { Logger } from "../logger/Logger.js";
import { LoggerLevels } from "../logger/LoggerLevels.js";

/**
 * 
 * @param {string} error 
 * @param {Logger|null} logger
 */
export const reportOnError = function(error, logger){
    if(logger){
        return logger.log(error, LoggerLevels.ERROR);
    }
    console.log(error);
}