let listsepatu = ['nike', 'puma', 'adidas'];
console.log(listsepatu[1]);
//array mulai dari 0

let listpeople = [
    {
        name: 'ani',
        age: 31,
    },
    {
        name: 'vikky',
        age: 30,
    }
];
console.log(listpeople);

function pertambahan(a, b){
    return a + b;
}

console.log (pertambahan(100, 50))

//nested function

function message(name) {
    function hello(){
        return `Hello ${name},` ;
    }

    function welcome(){
        return ` Welcome to Purwadika`
    }
    return hello() + welcome()
}
console.log(message("Vikky"));

//Currying Function

function multicur(factor){
    return function(number){
        return number * factor;
    }
}

const result = multicur(5)
console.log(result(3));

//recursice function

function countdown(message) {
    console.log(message);

    let nextnumber = message - 1;
    if (nextnumber > 0) {
        countdown(nextnumber);
    }
}

countdown (4)

//arrow function

