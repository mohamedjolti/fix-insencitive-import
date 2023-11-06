import fs from 'fs';
import { reportOnError } from './reportOnError.js';

/**
 * Append to file a text message 
 * @param {string} fileName 
 * @param {string} message 
 */
export const writeInFile = async function(fileName , message){
   await fs.appendFile(fileName, message, function(err) {
        if(err) {
            reportOnError(err);
        }
    }); 
}