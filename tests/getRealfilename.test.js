import { getRealFilename } from "../src/tools/getRealFilename";
import { expect } from '@jest/globals';

it("test " , async function(){
 const FOO = await getRealFilename("./tests/testsample/FOO");
 expect(FOO).toEqual("foo.js");

 const Foo = await getRealFilename("./tests/testsample/Foo.js");
 expect(Foo).toEqual("foo.js");

 const TOTO = await getRealFilename("./tests/testsample/TOTO");
 expect(TOTO).toEqual(false);
})