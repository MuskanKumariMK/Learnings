let s = "AbcDEfgH";
let toggle = "";

for (let i = 0; i < s.length - 1; i++) {
  let ch = s.charAt(i);
  if (s.charCodeAt(i) >= 65 && s.charCodeAt(i) <= 90) {
    toggle = toggle + String.fromCharCode(s.charCodeAt(i) + 32);
  } else if (s.charCodeAt(i) >= 97 && s.charCodeAt(i) <= 122) {
    toggle = toggle + String.fromCharCode(s.charCodeAt(i) - 32);
  }
}
console.log(toggle);
