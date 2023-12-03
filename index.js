import { FixInsencitiveImport } from "./src/fixInsencitiveImport.js";

const fixInsencitiveImport = new FixInsencitiveImport({
    directory : "./sample"
})

// fixInsencitiveImport.addHandleFileRule(function(filename){
//     return filename.includes(".component.js");
// })
fixInsencitiveImport.execute();
