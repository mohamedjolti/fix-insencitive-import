import { FixInsencitiveImport } from "./src/FixInsencitiveImport.js";

const fixInsencitiveImport = new FixInsencitiveImport({
    targetDir : "./sample",
    shouldLog : true 
})

fixInsencitiveImport.addHandleFileRule(function(filename){
    return filename.includes(".component.js");
})
//fixInsencitiveImport.execute();
