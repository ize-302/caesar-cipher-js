const alphabets = 'abcdefghijklmnopqrstuvwxyz'

// function to generate substitute cipher using the shift value
function generateSubstituteCipher(shift_value) {
  let value = ''
  for (let index = 0; index < alphabets.length; index++) {
    const element = alphabets[index];
    const elementPosition = alphabets.indexOf(element)
    const elementPositionPlusShiftValue = elementPosition + shift_value
    const elementReplacement = alphabets[elementPositionPlusShiftValue]

    if (elementPositionPlusShiftValue > 25) {
      /* 
      * if the result is more than 25 i.e the position of z,
      * we wrap around to the beginning of the alphabet using modular arithmetic and use
      * the remainder value as the point to reach the new replacement value
      */
      const remainder = elementPositionPlusShiftValue % 25
      value = value + alphabets[remainder]
    } else {
      value = value + elementReplacement
    }
  }
  return value
}

// encrypting the message
function encryptMessage(message, shift_value) {
  let encryptedMessage = ''
  const substituteCipher = generateSubstituteCipher(shift_value)

  // iterate through message
  for (let index = 0; index < message.length; index++) {
    const element = message.toLowerCase()[index]; // converting to lowercase to reduce complexity
    const elementPosition = alphabets.indexOf(element)

    // We only want to encrypt alphabets
    if (alphabets.includes(element.toLowerCase())) {
      const encryptedElement = substituteCipher[elementPosition]
      encryptedMessage = encryptedMessage + encryptedElement
    } else {
      encryptedMessage = encryptedMessage + element
    }
  }
  return encryptedMessage
}

// decrypting the message
function decryptMessage(message, shift_value) {
  let decryptedMessage = ''
  const substituteCipher = generateSubstituteCipher(shift_value)

  // iterate through message
  for (let index = 0; index < message.length; index++) {
    const element = message.toLowerCase()[index];
    const elementPosition = substituteCipher.indexOf(element)

    // Decrypt only alphabets
    if (substituteCipher.includes(element.toLowerCase())) {
      const decryptedElement = alphabets[elementPosition]
      decryptedMessage = decryptedMessage + decryptedElement
    } else {
      decryptedMessage = decryptedMessage + element
    }
  }
  return decryptedMessage
}

// Run!!!
console.log(encryptMessage('Attack at dawn!', 3)) // dwwdfn dw gdzq!
console.log(decryptMessage('khoor zruog!', 3)) // hello world!
