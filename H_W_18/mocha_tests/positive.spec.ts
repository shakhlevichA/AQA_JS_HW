import { expect } from "chai";
import { TestStrings } from "../task_1";


describe ("Positive tests.", () => {
    before("Before",async function(){
        console.log("Starting test suit!")
    })

    after("After",async function(){
        console.log("End test suit!")
    })

    it("1. SymbolCount function. Correct count.", () => {
        const testObject = new TestStrings;
        const expectedRes = "s2";
        const actualRes = testObject.symbolCount("strings", 0);
        expect(actualRes, `Expected ${expectedRes} is not equal to actual ${actualRes}`).equals(expectedRes);
    })

    it("2. SubStrCount function. Several indexes.", () => {
        const testObject = new TestStrings;
        const expectedRes = [0,22];
        const actualRes = testObject.subStrCount("str with some subs in str", "str");
        expect(actualRes, `Expected ${expectedRes} is not equal to actual ${actualRes}`).to.deep.equal(expectedRes);
    })

    it("3. SubStrCount function. Single index.", () => {
        const testObject = new TestStrings;
        const expectedRes = [0];
        const actualRes = testObject.subStrCount("str with some subs in", "str");
        expect(actualRes, `Expected ${expectedRes} is not equal to actual ${actualRes}`).to.deep.equal(expectedRes);
    })

    it("4. SubStrCount function. String == Substring.", () => {
        const testObject = new TestStrings;
        const expectedRes = [0];
        const actualRes = testObject.subStrCount("str with some subs in", "str with some subs in");
        expect(actualRes, `Expected ${expectedRes} is not equal to actual ${actualRes}`).to.deep.equal(expectedRes);
    })

    it("5. DeleteExclude function. Standart delete.", () => {
        const testObject = new TestStrings;
        const expectedRes = " str for 3 excercise ";
        const actualRes = testObject.deleteExclude("3 str for 3 excercise 3", "3", 1);
        expect(actualRes, `Expected ${expectedRes} is not equal to actual ${actualRes}`).equals(expectedRes);
    })

    it("6. DeleteExclude function. Remove whole string.", () => {
        const testObject = new TestStrings;
        const expectedRes = "";
        const actualRes = testObject.deleteExclude("3 str for 3 excercise 3", "3 str for 3 excercise 3", 1);
        expect(actualRes, `Expected ${expectedRes} is not equal to actual ${actualRes}`).equals(expectedRes);
    })

    it("7. DeleteExclude function. Not remove substring.", () => {
        const testObject = new TestStrings;
        const expectedRes = "3 str for 3 excercise 3";
        const actualRes = testObject.deleteExclude("3 str for 3 excercise 3", "qwerty", 1);
        expect(actualRes, `Expected ${expectedRes} is not equal to actual ${actualRes}`).equals(expectedRes);
    })

    it("8. DeleteExclude function. Substring is in different register.", () => {
        const testObject = new TestStrings;
        const expectedRes = "3 str for 3 excercise 3";
        const actualRes = testObject.deleteExclude("3 str for 3 excercise 3", "STR", 1);
        expect(actualRes, `Expected ${expectedRes} is not equal to actual ${actualRes}`).equals(expectedRes);
    })

    it("9. ReplaceSymbols function. Standart replacement.", () => {
        const testObject = new TestStrings;
        const expectedRes = "stttsg";
        const actualRes = testObject.replaceSymbols("string", [3,4,2], [1,0,1]);
        expect(actualRes, `Expected ${expectedRes} is not equal to actual ${actualRes}`).equals(expectedRes);
    })

    it("10. ReplaceSymbols function. Replace to the same symbols.", () => {
        const testObject = new TestStrings;
        const expectedRes = "string";
        const actualRes = testObject.replaceSymbols("string", [1,2,3], [1,2,3]);
        expect(actualRes, `Expected ${expectedRes} is not equal to actual ${actualRes}`).equals(expectedRes);
    })
});














