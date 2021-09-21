// Write your tests here!
const { substitution } = require("../src/substitution");
const expect = require("chai").expect;

//  SUBSTITUTION TESTS =========================================================================================
// Check for invalid substitute alphabet

describe("substitution function tests", () => {
  it("should return false if substituted alphabet is missing, not exactly 26 characters, and not unique", () => {
    let subAlphabet = [
      "x",
      "z",
      "a",
      "r",
      "g",
      "e",
      "s",
      "m",
      "j",
      "k",
      "o",
      "w",
      "t",
      "a",
      "s",
      "p",
      "h",
      "v",
      "d",
      "q",
      "v",
      "y",
      "n",
    ];

    let actual = substitution("I love bacon", subAlphabet);

    expect(actual).to.be.false;
  });

  it("should return encoded message j wfyg zxafb from I love bacon", () => {
    let subAlphabet = "xzargesmjkowtbfphvdqcynliu";

    let actual = substitution("I love bacon", subAlphabet);
    let expected = "j wfyg zxafb";

    expect(actual).to.eql(expected);
  });

  it("should return .ww i%cv z.dg zgw%bs q% cd with any keys as substitude alphabet", () => {
    let subAlphabet = ".zargesmjkowtb%phvdqc4n$iu";

    let actual = substitution("All your base belong to us", subAlphabet);
    let expected = ".ww i%cv z.dg zgw%bs q% cd";

    expect(actual).to.eql(expected);
  });

  it("should decode .ww i%cv z.dg zgw%bs q% cd and return All your base belong to us", () => {
    let subAlphabet = ".zargesmjkowtb%phvdqc4n$iu";

    let actual = substitution(".ww i%cv z.dg zgw%bs q% cd", subAlphabet, false);
    let expected = "all your base belong to us";

    expect(actual).to.eql(expected);
  });

  it("should preserve spaces", () => {
    let subAlphabet = "xzargesmjkowtbfphvdqcynliu";

    let actual = substitution("I love bacon", subAlphabet);
    let expected = "j wfyg zxafb";

    expect(actual).to.eql(expected);
  });
});
