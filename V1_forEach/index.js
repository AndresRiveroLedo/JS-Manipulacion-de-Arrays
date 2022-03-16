//-----Primer Ejemplo------
const letters = ['a', 'b', 'c'];
letters.forEach(element => console.log('foreach:', element));

/* vs */

for(let index = 0; index < letters.length; index++){
    const element = letters[index];
    console.log('for:', element);
}

/*forEach tiene una sintaxis mucha mas corta */