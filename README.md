# javascript-manipulacion-de-arrays

# 📒 V2 - forEach

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

# 📒 V3 - Mutable e Inmutable

En JavaScript, solo los objetos (objects) y las matrices (arrays) son mutables, no los valores primitivos.

![valores](./img/v3_0.webp)

Ejemplo gráfico:

![valores](./img/v3.gif)

+ Mutable es un tipo de variable que se puede cambiar. Puedes hacer que el nombre de una variable apunte a un nuevo valor, pero el valor anterior todavía se mantiene en la memoria. De ahí la necesidad de la recolección de basura.
    + Un objeto mutable es un objeto cuyo estado puede modificarse después de su creación.
    + Los inmutables son los objetos cuyo estado no se puede cambiar una vez creado el objeto.
    + Las cadenas y los números son inmutables. Entendamos esto con un ejemplo:

En el código siguiente, se crea un nuevo objeto con valor de cadena.

```
    let immutableString = “Hola”;
    immutableString = immutableString + “Mundo”;
```

Al agregar “immutableString” con un valor de cadena, ocurren los siguientes eventos:

<aside>
    Se recupera el valor existente de "immutableString"
    "Mundo" se agrega al valor existente de "immutableString"
    El valor resultante luego se asigna a un nuevo bloque de memoria
    El objeto "immutableString" ahora apunta al espacio de memoria recién creado
    El espacio de memoria creado anteriormente ahora está disponible para la recolección de basura.
</aside>

## Estructuras de datos inmutables

¿Estás seguro de que modificar esa variable no le hará daño al código? ¿No? Bueno, entonces aprendamos de inmutabilidad.

Si sabemos que algo es mutable cuando puede cambiar podemos deducir es inmutable cuando no puede cambiar. Ahora bien, para entender de que nos sirve la inmutabilidad veamos el siguiente ejemplo.

Imaginemos que estamos trabajando en equipo y tenemos un set de datos como este:

![inmutables](./img/v3_1.png)

Pero resulta que queremos cambiar la vaca por un pez, así que hacemos algo así:

![inmutables](./img/v3_2.png)

Sin embargo, El trabajo de nuestro compañero dependía de que la vaca estuviese ahí ¿Entonces que hacemos? Trabajar con datos inmutables.

Ya que nuestros datos son inmutables si queremos realizar cambios lo más sencillo sería hacer una copia modificada. Algo así:

![inmutables](./img/v3_3.png)

Por la cantidad de recursos que consume y dificultad para manejar múltiples copias, esta solución es lenta y poco escalable. Aquí entran las estructuras de datos persistentes

Las estructuras de datos persistentes son esencialmente estructuras de datos inmutables que pueden volver en el tiempo. Para entenderlas tenemos que pasar a verlas en forma de árbol. Algo así:

![inmutables](./img/v3_4.png)

Aquí dividimos el set de datos en pares y los conectamos con nodos los cuales se conectan entre sí hasta llegar a un nodo raíz que identificará nuestro set de datos

Ahora, para realizar cambios a nuestros datos, enlazamos los nodos que no cambiaron en nuestro set de datos a un nuevo nodo raíz que identificará al nuevo set de datos. Algo así:


![inmutables](./img/v3_5.png)

Esta técnica se llama **Path Copying** y nos permite que el modificar nuestro set de datos inmutable ocupe un menor espacio y sea mucho más rápido que copiarlo todo por cada cambio que realizamos. Con esta técnica también podremos acceder a nuestros datos originales en cualquier momento.

Ahora, para acceder a nuestros datos hagamos como que cada nodo es un bit y cada valor en ese bit representa un camino para llegar a nuestros datos. Algo como esto:

![inmutables](./img/v3_6.png)

+ Entonces si quisiéramos llegar a nuestro panda en vez de escribir: Data[6] 
+ Tendremos que convertir nuestro 6 a binario y acceder de la siguiente forma: Data[0b110] 
+ (“0b” es solo un prefijo utilizado para indicar que es un número binario en vez de un número en base 10). Pero generalmente estos árboles no contienen nodos con solo dos ramas si no de 32 ramas por nivel, representando así 5 bits por nivel. Entonces si tuviéramos un número más grande como: 22693
+ Que para acceder al mismo con un número binario sería algo así: Data[0b101100010100101]
+ Con una estructura de 32 ramas sería algo así: Data10110--> 00101--> 00101

Así descendemos 3 niveles en lugar de 15.
Hay que tener en cuenta también que este es solo un ejemplo de estructuras de datos inmutables, pero sirve para tener una vista previa de como trabajan las mismas.
Ahora, si quieres aplicar esto en tus proyectos hay librerías de Javascript como Mori o Immutable que nos permiten trabajar con inmutabilidad en nuestros datos de manera muy sencilla.

# 📒 V4 - MAP

+ El map() método crea una nueva matriz con los resultados de llamar a una función proporcionada en cada elemento de la matriz que llama.
    + .map() es INMUTABLE por lo tanto no modifica el array original, sino que crea uno nuevo con la “transformación” aplicada.
    + Además, mantienes el mismo length que el array original, te devuelve en el nuevo array la misma cantidad que el array que le aplicaste el método.

```
    const array1 = [1, 4, 9, 16];

    // pass a function to map
    const map1 = array1.map(x => x * 2);

    console.log(map1);
    // expected output: Array [2, 8, 18, 32]

```

## Sintaxis

 ```
    // Arrow function
    map((element) => { /* ... */ })
    map((element, index) => { /* ... */ })
    map((element, index, array) => { /* ... */ })

    // Callback function
    map(callbackFn)
    map(callbackFn, thisArg)

    // Inline callback function
    map(function(element) { /* ... */ })
    map(function(element, index) { /* ... */ })
    map(function(element, index, array){ /* ... */ })
    map(function(element, index, array) { /* ... */ }, thisArg)
 ```

 El método join() une todos los elementos de una matriz (o un objeto similar a una matriz) en una cadena y devuelve esta cadena.

 ```
    const elements = ['Fire', 'Air', 'Water'];

    console.log(elements.join());
    // expected "Fire,Air,Water"

    console.log(elements.join(''));
    // expected  "FireAirWater"

    console.log(elements.join('-'));
    // expected "Fire-Air-Water"
 ```

 # 📒 V5 - MAP reloaded

+ Usos comunes o clásicos de map() sobre los arrays:
    + Limpiar datos, seleccionar datos dentro de un array y devolverlos para su utilización en futuras acciones.
    + Añadir un nuevo elemento, modificar agregando un nuevo dato al objeto pero sin modificar el array original.

Tener en cuenta que cuando trabajamos con objetos y map() y retornamos el mismo objeto estamos copiando la referencia en memoria que tiene el objeto original que le aplicamos el map(). Esto provoca que como estamos modificando la referencia en memoria, el array original también sea modificado. Entonces en conclusión, por más que map() sea inmutable en este punto estamos copiando la referencia en memoria y por eso hace el cambio en el original.

```
    // Estamos retornando el objeto
    // por ende se copia la refencia en memoria
    const rta = orders.map(item => {
        item.tax = .19
        return item;
    })
```

Para evitarlo, y poder realizar una copia y evitar la referencia en memoria, utilizamos el spread operator de ES6 (https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Operators/Spread_syntax), donde generamos un nuevo objeto con los valores del objeto original y luego agregamos el nuevo valor que nos interesa.

```
    const rta = orders.map(item => {
        // retornamos un nuevo objeto 
        //pero evitamos hacer ref. en memoria
        return {
            ...item,
            tax: .19,
        }
    })
```