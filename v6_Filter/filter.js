//En este ejemplo buscamos los elementos que tenga más de seis letras  
const words = ["spray", "limit", "elite", "exuberant"];

    // con for
    const newArray = [];
    for (let index = 0; index < words.length; index++) {
        const element = words[index];
        if (element.length >= 6) {
            newArray.push(element);
            console.log(newArray)
        }
    }

    // VS

    // con filter
    const rta = words.filter((element) => element.length >= 6);
    console.log('respuesta', rta)

/*---Otro Ejemplo---- */
    const orders = [
        {
          customerName: "Nicolas",
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
        },
        {
            customerName: "Nicolas",
            total: 2322,
            delivered: false,
          },
      ];
    
    
    //Filtramos las ordenes delivered = true y total >= 100. 
    const rta3 = orders.filter(item => item.delivered && item.total >= 100)
    console.log('rta3', rta3);
    
    //ejemplo de buscador con filter
    const search = (query) => {
        return orders.filter(item => {
            return item.customerName.includes(query);
        })
    }
    
    // console.log(search('Nico'));
    console.log(search('Nicolas'));