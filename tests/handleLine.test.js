import { handleLine } from "../src/handleLine.js";
import { expect } from '@jest/globals';

it("test handle line should fix the import" , async function(){
const lineOK = 'import { chicken } from "./subsample/chicken.js"';
const lineKo = 'import { chicken } from "./subsample/chiCken"';
 const handledLine = await handleLine(lineKo, "./tests/testsample/example.js");
 expect(handledLine).toEqual(lineOK);
})