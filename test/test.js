"use strict";

// Dependencies
const iig = require("../index")

// Main
describe("IIG", ()=>{
    test("Grab IP information", async()=>{
        const result = await iig("157.240.211.35")

        expect(result.asn).toBe("AS32934")
    })
})