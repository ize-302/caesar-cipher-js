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

```sh
# Representation of alphabelts with numbers starting from 0 to 25
a  b  c  d  e  f  g  h  i  j  k  l  m  n  o  p  q  r  s  t  u  v  w  x  y  z
0  1  2  3  4  5  6  7  8  9  10 11 12 13 14 15 16 17 18 19 20 21 22 23 24 25
```

- Add the shift value to this position.
- If the result is greater than 25 (the position of 'Z'), wrap around to the beginning of the alphabet using modular arithmetic.
- Replace the original letter with the letter at the new position.

##### Example

```sh
Text: hello world
shift value: 3

# The encryption process:
h (7) + 3 = 10 => l
e (4) + 3 = 7 => h
l (11) + 3 = 14 => o
l (11) + 3 = 14 => o
o (14) + 3 = 17 => r
# we dont transform spaces, numbers and symbols
w (22) + 3 = 25 => z
o (14) + 3 = 17 => r
r (17) + 3 = 20 => u
l (11) + 3 = 34 => o
d (3) + 3 = 6 => g

"hello world" becomes "lhoor zruog"
```

#### Decryption

To decrypt, simply reverse the process by subtracting the shift value from each letter in the ciphertext.

##### Example

```sh
Text: lhoor zruog
shift value: 3

# The encryption process:
l (11) - 3 = 7 => h
h (7) - 3 = 4 => e
o (14) - 3 = 11 => l
o (14) - 3 = 11 => l
r (17) - 3 = 14 => o
# we dont transform spaces, numbers and symbols
z (25) - 3 = 22 => w
r (17) - 3 = 14 => o
u (20) - 3 = 17 => r
o (14) - 3 = 11 => l
g (6) - 3 = 3 => d

"lhoor zruog" becomes "hello world"
```

#### Strengths and Weaknesses

##### Strengths:

- Simple and easy to implement.
- Good for teaching basic concepts of encryption and decryption.

##### Weaknesses:

- Very easy to break, especially with modern computational methods.
- Only 25 possible shift values, making brute-force attacks trivial.
- Patterns in the plaintext are preserved in the ciphertext, making it vulnerable to frequency analysis.

#### Practical Use

Due to its simplicity and vulnerability to attacks, the Caesar cipher is not used for serious encryption purposes today. However, it serves as a foundational concept in the study of cryptography and is useful for educational purposes and understanding the basics of encryption.

#### Research materials

- [Caesar Cipher by Wikipedia](https://en.wikipedia.org/wiki/Caesar_cipher)
- [Caesar Cipher by Neso Academy ](https://www.youtube.com/watch?v=JtbKh_12ctg&t=10s)
- [Caesar Cipher1 by MathAfterMath](https://www.youtube.com/watch?v=fR8rVR72a6o&t=45s)
