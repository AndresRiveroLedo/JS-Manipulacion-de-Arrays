//Contaremos el numero de veces que se repiten los numero dentro del array items
//1 --> se repite una vez
//3 --> se repite dos veces
//2 -- se repite una vezS
const items = [1, 3, 2, 3];

//funcion reduce
// primer argumento de la f() es el acumulador
// segundo argumento de la f() es el elemento y es el estado inicial del acumulador
const rta = items.reduce((obj, item) => {
    //Si dentro no existe el numero, inicializamos el acumulador a uno
    if (!obj[item]) {
        obj[item] = 1;
    } else {//si no, existe y sumamos uno en el acumulador
        obj[item] = obj[item] + 1;
    }
    return obj;
}, {});

console.log(rta);

/*-----Otro Ejemplo-------*/
/**Contamos el numero de niveles que hay en el array de objetos */
//low --> 2
//medium --> 2
//height --> 3
const data = [
  {
    name: "Nicolas",
    level: "low",
  },
  {
    name: "Andrea",
    level: "medium",
  },
  {
    name: "Zulema",
    level: "hight",
  },
  {
    name: "Santiago",
    level: "low",
  },
  {
    name: "Valentina",
    level: "medium",
  },
  {
    name: "Lucia",
    level: "hight",
  },
];

const rta1 = data
.map(item => item.level)
.reduce((obj, item) => {
    if (!obj[item]) {
        obj[item] = 1;
    } else {
        obj[item] = obj[item] + 1;
    }
    return obj;
}, {});

console.log(rta1);

