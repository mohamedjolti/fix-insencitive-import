import { Logger } from "./src/logger/Logger.js";
import { processFile } from "./src/processFile.js";
import { readFiles } from "./src/readFiles.js";

const logger = new Logger();
await readFiles("sample", logger);

