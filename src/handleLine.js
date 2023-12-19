import path from "path";
import { PATH_SEPARTOR } from "./constants.js";
import { getRealFilename } from "./tools/getRealFilename.js";
import { Logger } from "./logger/Logger.js";
import { getPathFromLineImport } from "./tools/getPathFromLineImport.js";

/**
 * example line = import { chicken } from "./subsample/cHicken.js" and filename is example.js
 * @param {string} line is line containing the import 
 * @param {string} fileName is the filename is name of the when the line is used
 * @param {Logger|null} logger
 * @returns {Promise}
 */
export const handleLine = function (line, fileName, logger = null) {
    const lineFilePath = getPathFromLineImport(line); // ./subsample/cHicken.js
    const orginalFilePath = path.dirname(fileName); // sample
    const lineFileBaseName = path.basename(lineFilePath);  // cHicken.js
    const realPath = orginalFilePath + PATH_SEPARTOR + lineFilePath; // sample/subsample/cHicken.js
    return getRealFilename(realPath).then((realFileName) => { // realFilename = chicken.js
        if (realFileName) {
            let lineFilePathReplaced = lineFilePath.replace(lineFileBaseName ,realFileName);
            if(logger && (lineFileBaseName !== realFileName)){
                logger.log("Replace " + lineFileBaseName + " with " + realFileName );
            }
            return line.replace(lineFilePath, lineFilePathReplaced);
        }else{
            return line;
        }
    })
}


