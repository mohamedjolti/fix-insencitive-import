import fs from 'fs';
import readline from 'readline';
import { handleLine } from './handleLine.js';
import { Logger } from './logger/Logger.js';
import { shouldHandleLine } from './shouldHandleLine.js';
import { replaceContentOfFile } from './tools/replaceContentOfFile.js';
import { reportOnError } from './tools/reportOnError.js';


const ERROR_EVENT = "error";
const CLOSE_EVENT = "close";
const END_EVENT = "end";
const LINE_EVENT = "line";
const UTF_8_ENCODING = 'utf8';

/**
 * 
 * @param {string} fileName 
 * @param {Logger} logger
 * @returns {Promise}
 */
export const processFile = async function (fileName, logger) {
    return new Promise(function (resolve) {
        let lines = [];
        logger.log("start handling file " + fileName);
        const fileStream = fs.createReadStream(fileName, { encoding: UTF_8_ENCODING });
        var lineReader = readline.createInterface({
            input: fileStream
        });
    
        /**
         * For each line we will check is we should handled it
         * If yes we change line and we push it to the lines array
         * If not we push it wihout change
         */
        lineReader.on(LINE_EVENT, function (line) {
            if(shouldHandleLine(line)){
                const handledLine = handleLine(line);
                lines.push(handledLine);
            }else{
                lines.push(line);
            }
        });

        lineReader.on(CLOSE_EVENT, function () {
            logger.log("end handling file " + fileName);
            replaceContentOfFile(fileName, lines);
            resolve(true);
        });
        fileStream.on(END_EVENT, function () {

        })
        fileStream.on(ERROR_EVENT, function (error) {
            reportOnError(error);
        })
    })
}