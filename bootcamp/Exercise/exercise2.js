//nomer 1
const celcius = 60
let farenheit = ((celcius * 9 / 5) + 32 );
console.log (farenheit)

//nomer 2
const numbercheck = 25;
let result;

if (numbercheck % 2 === 0){
    result = `${numbercheck} is even number`;}
    else {
    result = `${numbercheck} is odd number`;
};
console.log (result);

//nomer 3
let isPrime = true;
message = `${numbercheck} is a prime number`;

if (numbercheck === 1) message = `please input number other than 1`;

for (let i = 2; i < numbercheck; i++) {
  if (numbercheck % i == 0) {
    isPrime = false;
    message = `${numbercheck} is not a prime number`;
    break;
  }
}
console.log(message)

//nomer 4
let number = 5;
let jumlah = 0;

for(let i = 0; i <= number; i++){
    jumlah += i;

}
console.log(jumlah)

//nomer 5
let number1 = 4;
let jumblah = 1;

for(let i = number1; i >= 1; i--){
    jumblah *= i;
}
console.log(jumblah)

//nomer 6

calc = 0;
numberN = 10;
let num1 = 0;
let num2 = 1;
message = `First ${numberN} of fibonacci = ${num1}, `;

for (let i = 1; i <= numberN; i++) {
  calc = num1 + num2;
  num1 = num2;
  num2 = calc;
  message += i == 1 ? `${num1}` : `, ${num1}`;
}
console.log(message);
