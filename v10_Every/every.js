//Eejmplo 1: comparamos si todos los numeros del array es menor a 40
const numbers = [1,30,39,29,10,13];

//for
let rta = true;
for (let index = 0; index < numbers.length; index++) {
    const element = numbers[index];
    if (element >= 40) {
        rta = false
    }
}
console.log('for', rta); //true

//every
const rta2 = numbers.every(item => item <= 40)
console.log('rta2', rta2); //true

//ejercicio 2: Comprueba que los integrante sean menores de 15 años
const team = [
{
    name: "Nicolas",
    age: 12,
},
{
    name: "Andrea",
    age: 8,
},
{
    name: "Zulema",
    age: 2,
},
{
    name: "Santiago",
    age: 18,
},
];

const answer3 = team.every((item) => item.age < 18);
console.log("Todos son menores de 15 años: ", answer3);