// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (e.g., helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const substitutionModule = (function () {
  // you can add any code you want within this function scope

  const originalAlphabet = "abcdefghijklmnopqrstuvwxyz".split("");

  // Helper function to loop through codes and letters for both encoder and decoder functions
  const decipher = (input, codes) => {
    let encodedMessage = [];

    input.forEach((letter) => {
      if (letter === " ") {
        encodedMessage.push(" ");
      } else {
        for (let code in codes) {
          if (letter === code) {
            encodedMessage.push(codes[code]);
          }
        }
      }
    });

    return encodedMessage;
  };

  let encoder = (input, alphabet) => {
    // let lowerCase = input.toLowerCase().split("");
    let userAlphabet = Array.from(alphabet);

    let keyCodes = {};

    // Map each key with the original alphabet character to users alphabet value
    userAlphabet.map((letter, index) => {
      keyCodes[originalAlphabet[index]] = letter;
    });

    const translate = decipher(input, keyCodes);

    return translate.join("");
  };

  const decoder = (input, alphabet) => {
    let userAlphabet = Array.from(alphabet);

    let keyCodes = {};

    // Map each key with the original alphabet character to users alphabet value
    userAlphabet.map((letter, index) => {
      keyCodes[letter] = originalAlphabet[index];
    });

    const translate = decipher(input, keyCodes);

    return translate.join("");
  };

  function substitution(input, alphabet = [], encode = true) {
    // your solution code here
    input = input.toLowerCase().split("");
    const uniqueAlphabet = new Set(alphabet);

    if (!alphabet || uniqueAlphabet.size !== originalAlphabet.length)
      return false;

    return encode
      ? encoder(input, uniqueAlphabet)
      : decoder(input, uniqueAlphabet);
  }

  return {
    substitution,
  };
})();

module.exports = { substitution: substitutionModule.substitution };
