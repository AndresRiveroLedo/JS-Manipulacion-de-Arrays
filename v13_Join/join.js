const elements = ["Fire", "Air", "Water"];

let rtaFinal = '';
const separator = '--';
for (let index = 0; index < elements.length; index++) {
    const element = elements[index];
    rtaFinal = rtaFinal + element + separator;
}

const rta = elements.join('--')
console.log('for:', rtaFinal);
console.log('join:', rta);

const title = 'Curso de manipulación de arrays';

console.log(title.split(' '))//lo convertimos en un array

const urlFinal = title.split(' ').join('-').toLowerCase();
console.log(urlFinal);