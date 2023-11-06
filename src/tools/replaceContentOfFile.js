import fs from 'fs';
import { reportOnError } from './reportOnError.js';


const LINE_BREAK = "\n";

/**
 * Append to file a text message 
 * @param {string} fileName 
 * @param {Array<string>} lines
 */
export const replaceContentOfFile = async function(fileName , lines){
   const content = lines.join(LINE_BREAK);
   await fs.writeFile(fileName, content, function(err) {
        if(err) {
            reportOnError(err);
        }
    }); 
}