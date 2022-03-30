//sumamos los elementos de array totals[]
//for
const totals = [1,2,3,4];

let sum = 0;
for (let index = 0; index < totals.length; index++) {
    const element = totals[index];
    sum = sum + element;
}
console.log(sum);

/*----VS----*/
//reduce
// primer argumento de la f() es el acumulador
// segundo argumento de la f() es el elemento y es el estado inicial del acumulador
const rta = totals.reduce((sum, element) => sum + element, 0)
console.log('rta', rta);

//Ejemplo 
var integrado = [[0,1], [2,3], [4,5]].reduce(function(a,b) {
    return a.concat(b);
    });
  
console.log(integrado) //[ 0, 1, 2, 3, 4, 5 ]