import { FixInsencitiveImport } from "./src/FixInsencitiveImport.js";
import express from "express";
const fixInsencitiveImport = new FixInsencitiveImport({
    targetDir : "./sample",
    shouldLog : true 
})

fixInsencitiveImport.execute();

