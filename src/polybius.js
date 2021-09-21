// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (e.g., helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const polybiusModule = (function () {
  // you can add any code you want within this function scope

  const alphabet = "abcdefghijklmnopqrstuvwxyz";

  let cipherCodes = {
    a: 11,
    b: 21,
    c: 31,
    d: 41,
    e: 51,
    f: 12,
    g: 22,
    h: 32,
    i: 42,
    j: 42,
    k: 52,
    l: 13,
    m: 23,
    n: 33,
    o: 43,
    p: 53,
    q: 14,
    r: 24,
    s: 34,
    t: 44,
    u: 54,
    v: 15,
    w: 25,
    x: 35,
    y: 45,
    z: 55,
    space: 10,
    alphabet,
    numbers: 12345,
  };

  let testNumbers = "4432423352125413";

  let encoder = (input) => {
    let inputSplit = input.split("");

    let encodedNumber = "";
    inputSplit.forEach((letter) => {
      let lowerCase = letter.toLowerCase();

      !alphabet.includes(lowerCase)
        ? (encodedNumber += lowerCase)
        : (encodedNumber += cipherCodes[lowerCase]);
    });

    return encodedNumber;
  };

  let decoder = (input) => {
    let splitInput = input.split(" ").join(cipherCodes.space);

    //  Return false if input is not divibile by 2
    if (splitInput.length % 2 != 0) return false;

    const decodedResult = [];

    // Loop through input and get pairs of numbers
    for (let i = 0; i < splitInput.length; i += 2) {
      let numberPair = splitInput[i] + splitInput[i + 1];

      if (numberPair === "10") {
        decodedResult.push(" ");
      } else if (numberPair === "42") {
        decodedResult.push(`(i/j)`);
      } else {
        for (let code in cipherCodes) {
          if (
            numberPair !== "42" &&
            cipherCodes[code] === parseInt(numberPair)
          ) {
            decodedResult.push(code);
          }
        }
      }
    }

    return decodedResult.join("");
  };

  function polybius(input, encode = true) {
    // your solution code here

    return encode ? encoder(input) : decoder(input);
  }

  return {
    polybius,
  };
})();

module.exports = { polybius: polybiusModule.polybius };
