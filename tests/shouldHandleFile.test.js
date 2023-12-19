import { expect } from '@jest/globals';
import { shouldHandleFile } from '../src/shouldHandleFile';

it("should handle file test" , function(){
   expect(shouldHandleFile("file.text")).toEqual(false);
   expect(shouldHandleFile("file.json")).toEqual(false);
   expect(shouldHandleFile("file.js")).toEqual(true);
   expect(shouldHandleFile("file.ts")).toEqual(true);
   expect(shouldHandleFile("file.tsconfig")).toEqual(false);
})