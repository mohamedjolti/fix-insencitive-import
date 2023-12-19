import { expect } from '@jest/globals';
import { getPathFromLineImport } from "../src/tools/getPathFromLineImport.js";

it("get path from line containing an import" , function(){
   expect(getPathFromLineImport ("import { foo.js } from 'sample/foo.js'")).toEqual("sample/foo.js");
   expect(getPathFromLineImport ('import { foo.js } from "sample/foo.js"')).toEqual("sample/foo.js");
})