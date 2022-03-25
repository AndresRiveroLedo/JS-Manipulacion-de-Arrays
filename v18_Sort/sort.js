//metodo mutable: sort()
//ejemplo 1
const months = ['March', 'Jan', 'Feb', 'Dec', 'a' ]; //leer la docu 
months.sort();
console.log(months);

//ejemplo 2
const numbers = [1, 30, 4, 21, 100000];
numbers.sort((a,b) => a - b); //de menor a mayor
numbers.sort((a,b) => b - a); //de Mayor a menor
console.log(numbers);

//ejemplo 3:
const words = ['réservé', 'premier', 'communiqué', 'café', 'adieu', 'éclair', 'banana'];
words.sort((a,b) => a.localeCompare(b));
console.log(words);


//ejemplo 4:
const orders = [
    {
      customerName: "Nicolas",
      total: 600,
      delivered: true,
    },
    {
      customerName: "Zulema",
      total: 120,
      delivered: false,
    },
    {
      customerName: "Santiago",
      total: 1840,
      delivered: true,
    },
    {
      customerName: "Valentina",
      total: 240,
      delivered: true,
    },
  ];
  orders.sort((a,b) => b.total - a.total);
  console.log(orders);