import fs from 'fs';
import readline from 'readline';
import { Logger } from './logger/Logger.js';
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
export const processFile = async function (fileName , logger) {
    return new Promise(function (resolve) {
        logger.log("start handling file " + fileName);
        const fileStream = fs.createReadStream(fileName, { encoding: UTF_8_ENCODING});
        var lineReader = readline.createInterface({
            input: fileStream
        });

        lineReader.on(LINE_EVENT, function (line) {
            logger.log(line)
          //console.log('Line from file:' + fileName, line);
        });

        lineReader.on(CLOSE_EVENT, function () {
            logger.log("end handling file " + fileName);
            resolve(true);
          //  console.log('all done, son');
        });
        fileStream.on(END_EVENT, function () {
        
        })
        fileStream.on(ERROR_EVENT, function(error){
            reportOnError(error);
        })
    })
}