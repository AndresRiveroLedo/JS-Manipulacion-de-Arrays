//Aquí veremos algunos metodos mutables: push(), slice(),
const products = [
    { title: "Pizza", price: 121, id: "🍕" },
    { title: "Burger", price: 121, id: "🍔" },
    { title: "Hot cakes", price: 121, id: "🥞" },
  ];

  const myProducts = [];
  console.log("products", products);
  console.log("myProducts", myProducts);
  console.log("-".repeat(10));
  
  //buscamos un producto en products[] y lo añadimos a myProducts[]
  const productIndex = products.findIndex(item => item.id === '🍔');
  if (productIndex !== -1) {
      myProducts.push(products[productIndex]);
      products.splice(productIndex, 1); //borramos el elemento encontrado
  }
  console.log("products", products);
  console.log("myProducts", myProducts);
  console.log("-".repeat(10));
  
  // Update: actualizar
  const productsV2 = [
      { title: "Pizza", price: 121, id: "🍕" },
      { title: "Burger", price: 121, id: "🍔" },
      { title: "Hot cakes", price: 121, id: "🥞" },
    ];
  const update = {
      id: "🥞",
      changes: {
          price: 200,
          description: 'delicioso'
      }
  }
  console.log(productsV2);
  console.log(update);

  const productIndexV2 = productsV2.findIndex(item => item.id === update.id);
  productsV2[productIndexV2] = {
      ...productsV2[productIndexV2],
      ...update.changes,
  };
  console.log(productsV2);