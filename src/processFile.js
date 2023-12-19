import fs from 'fs';
import LineByLineReader from 'line-by-line';
import { handleLine } from './handleLine.js';
import { Logger } from './logger/Logger.js';
import { shouldHandleLine } from './shouldHandleLine.js';
import { replaceContentOfFile } from './tools/replaceContentOfFile.js';
import { reportOnError } from './tools/reportOnError.js';


const ERROR_EVENT = "error";
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
        if(logger instanceof Logger){
            logger.log("start handling file " + fileName);
        }
        const fileStream = fs.createReadStream(fileName, { encoding: UTF_8_ENCODING });
        const lineReader = new  LineByLineReader(fileName);
    
        /**
         * For each line we will check is we should handled it
         * If yes we change line and we push it to the lines array
         * If not we push it wihout change
         */
        lineReader.on(LINE_EVENT, async function (line) {
            try{
                lineReader.pause();
                if(shouldHandleLine(line)){
                    const handledLine = await handleLine(line, fileName, logger);
                    lines.push(handledLine);
                }else{
                    lines.push(line);
                }
                lineReader.resume();
            }catch(error){
                reportOnError(error, logger);
            }
       
        });

        lineReader.on(END_EVENT, function () {
            if(logger instanceof Logger){
                logger.log("End handling file " + fileName);
            }
            replaceContentOfFile(fileName, lines);
            resolve(true);
        });
        fileStream.on(ERROR_EVENT, function (error) {
            reportOnError(error, logger);
        })
    })
}