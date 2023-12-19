import { Logger } from "./logger/Logger.js";
import { readFiles } from "./readFiles.js";
import { addHandleFileRule } from "./shouldHandleFile.js"
import { validateConfigDir } from "./validator/validateConfigDir.js";

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
        this.config = config;
    }

    addHandleFileRule(call){
        addHandleFileRule(call);
    }

    execute(){
        validateConfigDir(this.config);
        if(this.config && this.config.shouldLog){
            this.logger = new Logger();
        }
        readFiles(this.config.targetDir , this.logger);
    }

}