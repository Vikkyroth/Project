let age = 32
let status = "fresh graduate"
let gender = "men"

if (age > 17 && age < 20) {
    console.log("Bisa membuat KTP");
}else if(age > 20) {
    console.log("Sudah memiliki KTP")
}
else {
    console.log("Belum bisa membuat KTP")
}

//==================end of if============================

if (age > 21 && status == "fresh graduate" && gender == "men"){
    console.log("Bisa Kerja")
}else {
    console.log("Belum Bisa Kerja")
}

//==================end====================================

let buah = "Banana"

switch (buah) {
    case "Orange"://titik dua
        console.log("Harga orange adalah 5rb");
    break;
//harus gunakan break; supaya tidak membaca case dibawahnya
    case "Mangoes":
        console.log("Harga Mangoes 10rb");
    break;
    case "Banana":
        console.log("Harga Banana 25rb");
    break;
}

//=========================================================

const numbertocheck = 6;
let iseven;

if (numbertocheck % 2 === 0){
    iseven = `${numbertocheck} is an even number`;
} else {
    iseven = `${numbertocheck} is not an even number`;
}

console.log(iseven);

//---------------------------------------------------------

for (let i = 0; i < 10; i++){
    console.log(i)
}
//======looping=======
for (let i = 0; i <= 10; i++){
    if (i % 2 === 0){
        console.log(i)
    }
}

//========================================================
//=======while========
let i = 0;
let bools = true;
while (bools){
    if(i == 6){
        bools = false;
    }
    console.log(i);
    i++
}
//=====================================================

for (let i = 0; i <= 10; i++){
    if (i == 5) {
        continue;
    }
        console.log(i)
    }
