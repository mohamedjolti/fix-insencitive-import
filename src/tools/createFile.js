import { reportOnError } from "./reportOnError.js";
import fs from 'fs';

const WRITING_MODE = "w";
/**
 * 
 * @param {string} fileName 
 */
export const createFile = function (fileName) {
    fs.open(fileName, WRITING_MODE, function (err, file) {
        if (err) {
            reportOnError(err);
        }
    });
}