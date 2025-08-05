//? You are given a 0-indexed array of strings words and a character x.

// Return an array of indices representing the words that contain the character x.

// Note that the returned array may be in any order.

function findWordsContaining(words, x) {
  const indices = [];
  words.forEach((el, idx) => {
    if (el.includes(x)) {
      indices.push(idx);
    }
  });
  console.log(indices);
  return indices;
}
findWordsContaining(["leet", "code"], "e");
findWordsContaining(["abc", "bcd", "aaaa", "cbc"], "a");
findWordsContaining(["abc", "bcd", "aaaa", "cbc"], "z");
