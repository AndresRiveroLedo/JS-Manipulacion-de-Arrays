# javascript-manipulacion-de-arrays

# V1 - forEach

El forEach() método ejecuta una función proporcionada una vez para cada elemento de la matriz.

```
    const array1 = ['a', 'b', 'c'];

    array1.forEach(element => console.log(element));

    // expected output: "a"
    // expected output: "b"
    // expected output: "c"
```

## Sintaxis 📒

```
    // Arrow function
    forEach((element) => { /* ... */ })
    forEach((element, index) => { /* ... */ })
    forEach((element, index, array) => { /* ... */ })

    // Callback function
    forEach(callbackFn)
    forEach(callbackFn, thisArg)

    // Inline callback function
    forEach(function(element) { /* ... */ })
    forEach(function(element, index) { /* ... */ })
    forEach(function(element, index, array){ /* ... */ })
    forEach(function(element, index, array) { /* ... */ }, thisArg)

```
