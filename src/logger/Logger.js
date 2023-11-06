import { LOG_EXTENSION, LOG_FILE_NAME } from "../constants.js";
import { createFile } from "../tools/createFile.js";
import { writeInFile } from "../tools/writeInFile.js";

const LINE_BREAK = "\n";


export class Logger {
    /**
     * Drivers for logs
     * If the file driver is used , the logs will be written in a log file
     * If the console driver is used , the logs will be displayed in the console
     */
    static CONSOLE_LOG_DRIVER = "CONSOLE_LOG_DRIVER";
    static FILE_LOG_DRIVER = "FILE_LOG_DRIVER";

    constructor() {
        const FILE_NAME = LOG_FILE_NAME + getCurretDate() + LOG_EXTENSION
        this.setLogFileName(FILE_NAME);
        createFile(FILE_NAME);
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
     */
    async log(message) {
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