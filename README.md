# A javascript implementation of Caesar Cipher

The Caesar cipher is a type of substitution cipher where each letter in the plaintext is shifted a certain number of places down or up the alphabet. It is named after Julius Caesar, who used this encryption technique to communicate securely with his generals.

## How it works!

#### Pick a shift value

Decide how many positions each letter in the plaintext will be shifted. Common shift values are between 1 and 25. For example, if the shift value is 3, then:

'A' becomes 'D'
'B' becomes 'E'
'C' becomes 'F'
...and so on until 'Z' becomes 'C'.

#### Encryption

For each letter in the plaintext:

- Determine its position in the alphabet (e.g., 'A' is 0, 'B' is 1, etc.).
- A dd the shift value to this position.
- If the result is greater than 25 (the position of 'Z'), wrap around to the beginning of the alphabet using modular arithmetic.
- Replace the original letter with the letter at the new position.

#### Decryption

To decrypt, simply reverse the process by subtracting the shift value from each letter in the ciphertext.
