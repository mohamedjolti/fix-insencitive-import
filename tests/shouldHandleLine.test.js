import { expect } from '@jest/globals';
import { shouldHandleLine } from '../src/shouldHandleLine';

it("should handle line test" , function(){
   expect(shouldHandleLine("import { foo.js } from 'sample/foo.js'")).toEqual(true);
   expect(shouldHandleLine(" from 'sample/foo.js'")).toEqual(false);
   expect(shouldHandleLine("import { foo.js }")).toEqual(false);
})