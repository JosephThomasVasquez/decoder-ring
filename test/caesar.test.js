// Write your tests here!
const { caesar } = require("../src/caesar");
const expect = require("chai").expect;

//  CAESAR TESTS =========================================================================================
// Check for invalid shifts
describe("caesar function tests", () => {
  it("should return false if shift is 0, less than -25, or greater than 25", () => {
    let invalidShifts = [0, -26, 26, null, undefined];

    let actual = invalidShifts.every((value) => invalidShifts.includes(value));

    expect(actual).to.be.true;
  });

  it("should shift each character 3 letters to the right making a new string", () => {
    let actual = caesar("message", 3);
    let expected = "phvvdjh";

    expect(actual).to.eql(expected);
  });

  it("should not matter if letters are capital or lowercase", () => {
    let letters = "DEF";
    let expected = "ghi";
    let actual = caesar(letters, 3);

    expect(actual).to.eql(expected);
  });

  it("should encode a message preserving spaces and spoecial characters", () => {
    let test = "Super Mario Bros.";
    let actual = caesar(test, 5);
    let expected = "xzujw rfwnt gwtx.";

    expect(actual).to.eql(expected);
  });

  it("should shift to the left with a negative shift or decode", () => {
    let test = "ABC";
    let actual = caesar(test, -10);
    let expected = "qrs";
    expect(actual).to.eql(expected);
  });
});
