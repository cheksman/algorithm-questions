/*
STEPS FOR ENCRYPT

1. split string at the space
2. change separate words to an array of characters
3. convert the first character to ASCII
4. sort the last character to the second position
5. join all characters inn word
6. join all words to a string seperated with a space

*/


function encryptThis(string) {
  if (typeof string == 'string') {          // check if value is string
    let fullWords = [];
    let finalWord;
    let final = ""                       
    const words = string.split(" ")
    words.forEach(function (word, i) {

      if (word.length < 2) {                                   // if word length is less than 2 
        return final = word.charCodeAt(0)                            // return ascii of only character
      }
      if (word.length === 2) {
        let newWordArray = []
        const newWord = word.split("")
        const asciiChar = newWord[0].charCodeAt(0)
        newWordArray = [asciiChar, newWord[1]];
        return final = newWordArray.join("")
      }
      
      const newChars = word.split("")
      let firstChar = newChars[0].charCodeAt(0);
      let secondChar = newChars[1];
      for (let index = 0; index < newChars.length; index++) {
        let n = newChars.length - 1
        if (index === n) {
          newChars.splice(0, 1, firstChar);
          newChars.splice(1, 1, newChars[n]);
          newChars.pop();
          newChars.push(secondChar)
          finalWord = newChars.join("")                               // join all characters 
          fullWords.push(finalWord)
          final = fullWords.join(" ")                                 // join all words
          return final
        }
      }
    })
    return final
  } else {
    return 'not a string'
  }
}


var str = 'Hello World'
console.log(encryptThis(str))



function decryptThis(string) {
  if (typeof string == 'string') {
    let fullWords = [];
    let joinedChars = ""
    let finalWord = []
    let final = ""   
    let allWords = ""            
    const words = string.split(" ")

    function arrangeWord(passedString) {
      let secondWord = "";
      const newChars = passedString.split("")
      let n = newChars.length - 1
      let firstChar = newChars[0];
      let lastChar = newChars[n];
      for (let index = 0; index < newChars.length; index++) {
        if (index === n) {
          newChars.splice(0, 1, lastChar);
          newChars.splice(n, 1, firstChar);
          return secondWord = newChars.join("")
        }
      }
      return secondWord
    }

    function decodeChar (decode) {
      return String.fromCharCode(decode)
    }

    words.forEach(function (word, i) {
      
      if (i === 0) {
        const newWord = word.slice(0, 2);
        const secWord = word.slice(2);
        if (word.length < 3) {                                   // if word length is less than 2 
          return finalWord = String.fromCharCode(word)                            // return ascii of only character
        }
        if (word.length === 3) {
          newWordArray = [decodeChar(newWord), secWord]
          return finalWord = newWordArray.join("")
        }
        fullWords = [decodeChar(newWord), arrangeWord(secWord)]
        final = fullWords.join("")
        return

      } 

      let decodeWord = word.slice(0, 3);
      let otherSec = word.slice(3)
      joinedChars = [decodeChar(decodeWord), arrangeWord(otherSec)]

      allWords = joinedChars.join("")
    })
    finalWord = [final, allWords]
    return finalWord.join(" ")
  } else {
    return 'not a string'
  }
}

var newStr = '72olle 118ko'
console.log(decryptThis(newStr))