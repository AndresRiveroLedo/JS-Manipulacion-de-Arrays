//Ejemplo MAP
const letters = ['a','b', 'c'];

const newArray = letters.map(item => item + "++");
console.log('original', letters);
console.log('new', newArray);

//Ejemplo: for
const newArray1 = [];
for(let index = 0; index < letters.length; index++){
    const element = letters[index];
    newArray.push(element + '++')
}

//Con map nos basta una linea de codigo para el mismo resultado

const array = ['a', 'bb', 'ccc']; 
const rta = array.map(item => item.length);
console.log(rta);