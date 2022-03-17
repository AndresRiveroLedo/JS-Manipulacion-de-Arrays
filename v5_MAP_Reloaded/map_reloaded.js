const orders = [
    {
        customName: "Nicolas",
        total: 60,
        delivered: true,
    }, 
    {
        customerName: "Zulema",
        total: 120,
        delivered: false,
    },
    {
        customerName: "Santiago",
        total: 180,
        delivered: true,
    },
    {
        customerName: "Valentina",
        total: 240,
        delivered: true,
    }
];

console.log("original", orders);
const respuesta1 = orders.map((item) => item.total);
console.log("respuesta 1: ", respuesta1);

const respuesta2 = orders.map((item) => {
    item.tax = 0.19;
    return item;
});
/*Tener en cuenta que cuando trabajamos con objetos y map() y retornamos el mismo objeto estamos copiando la referencia en memoria que tiene el objeto original que le aplicamos el map() */
console.log("respuesta2", respuesta2);
console.log("original", orders)

/*Solución para añadir un nuevo elemento al objeto */
const respuesta3 = orders.map((item) => {
    return{
        ...item,
        tax: 0.50,
    };
});

console.log("respuesta 3: ",respuesta3);
