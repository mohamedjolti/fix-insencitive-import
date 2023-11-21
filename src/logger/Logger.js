import { LOG_EXTENSION, LOG_FILE_NAME } from "../constants.js";
import { createFile } from "../tools/createFile.js";
import { writeInFile } from "../tools/writeInFile.js";
import { LoggerLevels } from "./LoggerLevels.js";

const LINE_BREAK = "\n";


export class Logger {


    constructor() {
        const FILE_NAME = LOG_FILE_NAME + getCurretDate() + LOG_EXTENSION
        createFile(FILE_NAME);
        this.setLogFileName(FILE_NAME);
    }
    /**
     * 
     * @param {string} logFileName 
     */
    setLogFileName(logFileName) {
        this.logFileName = logFileName;
    }
    /**
     * 
     * @returns {string}
     */
    getLogFileName() {
        return this.logFileName;
    }
    /**
     * 
     * @param {string} message 
     * @param {string} level
     */
    async log(message, level = LoggerLevels.INFO) {
        return await writeInFile(this.getLogFileName(), formatLogMessage(message));
    }
}


const formatLogMessage = function (message) {
    return "Log " + getCurretDate() + "    " + " : " + message + LINE_BREAK;
}

const getCurretDate = function () {
    let currentDate = new Date(),
        month = '' + (currentDate.getMonth() + 1),
        day = '' + currentDate.getDate(),
        year = currentDate.getFullYear(),
        hour = currentDate.getHours(),
        minute = currentDate.getMinutes(),
        second = currentDate.getSeconds(),
        millisecond = currentDate.getMilliseconds();

    if (month.length < 2)
        month = '0' + month;
    if (day.length < 2)
        day = '0' + day;

    return [year, month, day, hour, minute, second, millisecond].join('_');
}