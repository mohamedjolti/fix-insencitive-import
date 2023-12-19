import { expect } from '@jest/globals';
import { checkRules } from "../src/checkRules.js";

it("get path from line containing an import" , function(){
    const testThrowError = function(data){
         throw new Error("error");
    }
    const testPromise = function(data){
        return Promise.resolve(true);
    }

    expect(checkRules([testThrowError] ,"data")).toEqual(false);
    expect(checkRules([testPromise], "data")).toEqual(true);
    expect(checkRules([
        (data) => true,      
        (data) => true,
        (data) => true,
        (data) => false,
        (data) => true
    ], "data")).toEqual(false);

    expect(checkRules([
        (data) => true,      
        (data) => true,
        (data) => true,
        (data) => true,
        (data) => true
    ], "data")).toEqual(true);
})