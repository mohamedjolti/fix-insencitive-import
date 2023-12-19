import { DIRECTORY_REQUIRED } from "../messages.js"

export const validateConfigDir = function(config){
    if(!config?.targetDir){
        throw new Error(DIRECTORY_REQUIRED);
    }
}