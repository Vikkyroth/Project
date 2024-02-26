//nomer 1
let num = 9
const mult = 10

for(let i = 1; i <= mult; i++){
    message = `${num} x ${i} = ${num*i}`;
    console.log(message)
}

//nomer 2
let string = "amsma";
console.log(string.split("").reverse().join(""));
let stringLength = string.length;
message = `${string} is a palindrome`;

for (let i = 0; i < stringLength / 2; i++) {
  if (string[i] !== string[stringLength - 1 - i]) {
    message = `${string} is not a palindrome`;
    break;
  }
}
console.log(message);

//nomer 3
let cm = 100000
let km = cm / 100000
message = `${cm} = ${km} Km`
console.log(message)

//nomer 4

