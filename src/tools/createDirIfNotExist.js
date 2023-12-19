import fs from 'fs';
import path from "path";

export const createDirIfNotExist = function(filepath){
    const targetDir = path.dirname(filepath);
    if(!fs.existsSync(targetDir)){
        return fs.promises.mkdir(targetDir, { recursive: true });
    }else{
        return Promise.resolve(true);
    }
}