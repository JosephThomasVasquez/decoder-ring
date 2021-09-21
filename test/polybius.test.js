// Write your tests here!
const { polybius } = require("../src/polybius");
const expect = require("chai").expect;

//  POLYBIUS TESTS =========================================================================================
// Check for invalid shifts
describe("polybius function tests", () => {
  it("should encode message into pairs of numbers", () => {
    let actual = polybius("California");
    let expected = "31111342124324334211";

    expect(actual).to.eql(expected);
  });

  it("should translate both 'i' and 'j' to 42", () => {
    let actual = polybius("mississippi");
    let expected = "2342343442343442535342";

    expect(actual).to.eql(expected);
  });

  it("should preserve spaces", () => {
    let actual = polybius("The chosen one");
    let expected = "443251 313243345133 433351";

    expect(actual).to.eql(expected);
  });

  it("should decode numbers to a message", () => {
    let actual = polybius("443251 313243345133 433351", false);
    let expected = "the chosen one";

    expect(actual).to.eql(expected);
  });

  it("should return false if the length of all numbers is odd", () => {
    let actual = polybius("443251 313243345133 43335", false);

    expect(actual).to.be.false;
  });
});
