import { Logger } from "./logger/Logger.js";
import { readFiles } from "./readFiles.js";
import { addHandleFileRule } from "./shouldHandleFile.js"

export class FixInsencitiveImport{
    /**
     * 
     * @param {{
     * directory : String,
     * shouldLog : boolean
     * 
     * }} config 
     */
    constructor(config){
        this.config = config
    }

    addHandleFileRule(call){
        addHandleFileRule(call);
    }

    execute(){
        if(!this.config.directory){
            throw new Error("Please specify the directory path");
        }
        readFiles(this.config.directory , new Logger);
    }

}