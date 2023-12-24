import { FixInsencitiveImport } from "./src/FixInsencitiveImport.js";
const fixInsencitiveImport = new FixInsencitiveImport({
    targetDir : "./sample",
    shouldLog : true 
})

fixInsencitiveImport.execute();

