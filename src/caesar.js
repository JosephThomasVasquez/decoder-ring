// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (e.g., helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const caesarModule = (function () {
  // you can add any code you want within this function scope
  const alphabet = "abcdefghijklmnopqrstuvwxyz";
  let alphabetLength = alphabet.length;

  // Encoder function - (params: array, int) ====================================================================
  function encodeShift(input, shift) {
    const encodedCharacters = [];

    // Split the string into an array of characters
    let stringArray = input.split("");

    stringArray.forEach((char) => {
      let lowerCase = char.toLowerCase();

      // Check if character is not in alphabet
      if (!alphabet.includes(lowerCase)) {
        encodedCharacters.push(char);
      } else {
        let charIndex = alphabet.indexOf(lowerCase) + shift;

        if (charIndex >= alphabetLength) charIndex -= alphabetLength;

        if (charIndex < 0) charIndex += alphabetLength;

        encodedCharacters.push(alphabet[charIndex]);
      }
    });

    return encodedCharacters.join("");
  }

  // Decoder function - (params: array, int) ====================================================================
  function decodeShift(input, shift) {
    const encodedCharacters = [];

    // Split the string into an array of characters
    let stringArray = input.split("");

    stringArray.forEach((char) => {
      let lowerCase = char.toLowerCase();

      // Check if character is not in alphabet
      if (!alphabet.includes(lowerCase)) {
        encodedCharacters.push(char);
      } else {
        let charIndex = alphabet.indexOf(lowerCase);

        shift >= 0
          ? (charIndex -= shift)
          : (charIndex -= shift + alphabetLength);

        if (charIndex < 0) charIndex += alphabetLength;

        encodedCharacters.push(alphabet[charIndex]);
      }
    });

    return encodedCharacters.join("");
  }

  function caesar(input, shift, encode = true) {
    // your solution code here
    if (shift === 0 || shift < -25 || shift > 25) return false;

    return encode ? encodeShift(input, shift) : decodeShift(input, shift);
  }

  return {
    caesar,
  };
})();

module.exports = { caesar: caesarModule.caesar };
