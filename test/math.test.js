/*const {add, calculateFactorial} = require("./math");

describe("Add function",()=>{
    it("should add numbers", ()=>{
        expect(add(5,11)).toBe(16);
    })
    it("should add negative numbers", ()=>{
        expect(add(-2,-3)).toBe(-5);
    })
	it('should add a positive and negative number', () => {
	  expect(add(2, -3)).toBe(-1);
	});
});

describe("calculate factorial function",()=>{
    it("should throw an error if arg is a string", ()=>{ expect(()=>calculateFactorial("FACTORIAL")).toThrow("Input must be a non-negative number"); })
    it("should throw an error if arg is lower than 0", ()=>{()=>expect(calculateFactorial(-5)).toThrow("Input must be a non-negative number"); })
    it("should return 1 if arg is 0", ()=>{ expect(calculateFactorial(0)).toBe(1); })
    it("should return 1 if arg is 1", ()=>{ expect(calculateFactorial(1)).toBe(1); })
    it("should pass the right factorial", ()=>{ 
        expect(calculateFactorial(2)).toBe(2);
        expect(calculateFactorial(4)).toBe(24);
        expect(calculateFactorial(8)).toBe(40320);
        expect(calculateFactorial(21)).toBe(42);
    })
});*/

const { goodUsers, tooManyUsers, expectedUsers, transformUsers} = require("./math");

describe("transform User", () => {
    it('should throw if no users provided', () => {
        expect(() => transformUsers(123)).toThrow("Users must be provided.");
        expect(() => transformUsers("salut")).toThrow("Users must be provided.");
        expect(() => transformUsers(undefined)).toThrow("Users must be provided.");
        expect(() => transformUsers(null)).toThrow("Users must be provided.");
    });

    it('should throw if too manyUsers provided', () => {
        expect(() => transformUsers(tooManyUsers)).toThrow("Too many users provided.");
    });

    it('should throw if users are not correct', () => {
        expect(() => transformUsers(["user1", "user2"])).toThrow("Users must be provided.");
    });

    it('should transform users to the good model', () => {
        expect(transformUsers(goodUsers)).toStrictEqual(expectedUsers);
    });
})