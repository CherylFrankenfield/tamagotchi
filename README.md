1: Checks for Output of 3 lines:

  input:
    `An old silent pond...
    A frog jumps into the pond,
    splash! Silence again.`

  Output:
    "This is A Haiku"

  Input:
    An old silent pond...

  Output:
    "This is not a Haiku"

  Possible Solutions: 3

2: Checks Each Word in Line For Number of Vowels

  input:
    An

  output:
    1

3: Checks each word in each sentence for number of vowels

  input:
    A frog jumps into the pond

  output:
    7

4: Checks if the last letter in a word is E

  input:
    ignore

  output:
    count - 1;

5: Check for diphthong in word and count them as one vowel

  input:
    hear
  output:
    1
