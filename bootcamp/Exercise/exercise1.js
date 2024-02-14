//nomer 1
let width = 3
let length = 5
const luas = width * length
console.log(luas)

//nomer 2

const keliling = (width + length) *2
console.log(keliling)

//nomer 3

const pi = Math.PI;
let r1 = 5;

const diameter = 2 * r1;

const kelling = pi * diameter;

const luasling = pi * (r1 * r1);

console.log(diameter);
console.log(kelling);
console.log(luasling);

//nomer 4

let s1 = 65;
let s2 = 80;

const segitiga = 180 - (s1 + s2);
console.log(segitiga);

//nomer 5
let date1 = new Date("2022-01-20");
let date2 = new Date("2022-01-22");

const dateDifferences = (date2 - date1) / (1000 * 3600 * 24);
console.log(dateDifferences);

//nomer 6

let day1 = 400;

const years = day1 / 365;
const months = (day1 % 365) / 30;
const days = (day1 % 365) % 30;

const hasil =`${years.toFixed()} tahun, ${months.toFixed()} bulan, ${days} hari`
console.log(hasil)