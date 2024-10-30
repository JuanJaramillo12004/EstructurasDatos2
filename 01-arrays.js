// LONGITUD - devuelve el número de elementos en un arreglo
const frutas = ['manzana', 'banana', 'naranja'];
console.log('Longitud del arreglo de frutas:', frutas.length); // Longitud del arreglo de frutas: 3

// AT - devuelve un elemento indexado de un arreglo (soporta índices negativos)
const numeros = [10, 20, 30, 40, 50];
console.log('Elemento en el índice 1:', numeros.at(1));  // Elemento en el índice 1: 20
console.log('Último elemento (en -1):', numeros.at(-1)); // Último elemento (en -1): 50

// PUSH & POP - añadir/remover elementos al final de un arreglo
const pila = [1, 2, 3];
console.log('Pila original:', pila); // Pila original: [1, 2, 3]
console.log('Valor devuelto por push:', pila.push(4)); // Valor devuelto por push: 4
console.log('Pila después de push:', pila); // Pila después de push: [1, 2, 3, 4]
const ultimo = pila.pop();
console.log('Valor eliminado:', ultimo); // Valor eliminado: 4
console.log('Pila después de pop:', pila); // Pila después de pop: [1, 2, 3]

// UNSHIFT & SHIFT - añadir/remover elementos al principio de un arreglo
const cola = [1, 2, 3];
console.log('Cola original:', cola); // Cola original: [1, 2, 3]
console.log('Valor devuelto por unshift:', cola.unshift(0)); // Valor devuelto por unshift: 4
console.log('Cola después de unshift:', cola); // Cola después de unshift: [0, 1, 2, 3]
const primero = cola.shift();
console.log('Valor eliminado por shift:', primero); // Valor eliminado por shift: 0
console.log('Cola después de shift:', cola); // Cola después de shift: [1, 2, 3]

// SPLICE - añade/remueve elementos desde cualquier posición
const meses = ['Ene', 'Marzo', 'Abril'];
console.log('Meses originales:', meses); // Meses originales: ['Ene', 'Marzo', 'Abril']
meses.splice(1, 0, 'Feb');
console.log('Meses después de insertar Feb:', meses); // Meses después de insertar Feb: ['Ene', 'Feb', 'Marzo', 'Abril']
meses.splice(2, 1);
console.log('Meses después de eliminar Marzo:', meses); // Meses después de eliminar Marzo: ['Ene', 'Feb', 'Abril']

// CONCAT - combina dos o más arreglos
const arr1 = [1, 2];
const arr2 = [3, 4];
console.log('Arreglo 1:', arr1); // Arreglo 1: [1, 2]
console.log('Arreglo 2:', arr2); // Arreglo 2: [3, 4]
const combinado = arr1.concat(arr2);
console.log('Arreglos combinados:', combinado); // Arreglos combinados: [1, 2, 3, 4]

// SLICE - devuelve una porción de un arreglo
const frutasCorte = ['manzana', 'banana', 'naranja', 'mango'];
console.log('Frutas originales:', frutasCorte); // Frutas originales: ['manzana', 'banana', 'naranja', 'mango']
const cítricos = frutasCorte.slice(2, 4);
console.log('Frutas cortadas (2,4):', cítricos); // Frutas cortadas (2,4): ['naranja', 'mango']

// FLAT & FLATMAP - aplana arreglos anidados
const anidado = [1, [2, 3], [4, [5, 6]]];
console.log('Arreglo anidado:', anidado); // Arreglo anidado: [1, [2, 3], [4, [5, 6]]]
console.log('Plano (profundidad=1):', anidado.flat()); // Plano (profundidad=1): [1, 2, 3, 4, [5, 6]]
console.log('Plano (profundidad=2):', anidado.flat(2)); // Plano (profundidad=2): [1, 2, 3, 4, 5, 6]

const numerosPlano = [1, 2, 3];
console.log('Números originales:', numerosPlano); // Números originales: [1, 2, 3]
const duplicados = numerosPlano.flatMap(x => [x, x * 2]);
console.log('FlatMap duplicados:', duplicados); // FlatMap duplicados: [1, 2, 2, 4, 3, 6]

// MAP - crea un nuevo arreglo transformando cada elemento
const numerosMap = [1, 2, 3];
console.log('Números originales:', numerosMap); // Números originales: [1, 2, 3]
const cuadrados = numerosMap.map(x => x * x);
console.log('Números cuadrados:', cuadrados); // Números cuadrados: [1, 4, 9]

// FILTER - crea un nuevo arreglo con elementos que pasan una prueba
const numerosFilter = [1, 2, 3, 4, 5];
console.log('Números originales:', numerosFilter); // Números originales: [1, 2, 3, 4, 5]
const pares = numerosFilter.filter(x => x % 2 === 0);
console.log('Números pares:', pares); // Números pares: [2, 4]

// REDUCE & REDUCERIGHT - reduce el arreglo a un solo valor
const numerosReduce = [1, 2, 3, 4];
console.log('Números a reducir:', numerosReduce); // Números a reducir: [1, 2, 3, 4]
const suma = numerosReduce.reduce((acc, curr) => acc + curr, 0);
console.log('Suma (reduce):', suma); // Suma (reduce): 10
const derecha = numerosReduce.reduceRight((acc, curr) => acc + curr, 0);
console.log('Suma (reduceRight):', derecha); // Suma (reduceRight): 10

// FIND & FINDINDEX - encontrar elemento o su índice
const numerosBuscar = [1, 2, 3, 4, 5];
console.log('Arreglo a buscar:', numerosBuscar); // Arreglo a buscar: [1, 2, 3, 4, 5]
console.log('Encontrar primero > 3:', numerosBuscar.find(x => x > 3)); // Encontrar primero > 3: 4
console.log('FindIndex primero > 3:', numerosBuscar.findIndex(x => x > 3)); // FindIndex primero > 3: 3

// FINDLAST & FINDLASTINDEX - encontrar último elemento que coincida o su índice
const numerosBuscarUltimo = [1, 2, 3, 4, 3, 2, 1];
console.log('Arreglo a buscar:', numerosBuscarUltimo); // Arreglo a buscar: [1, 2, 3, 4, 3, 2, 1]
console.log('FindLast valor 3:', numerosBuscarUltimo.findLast(x => x === 3)); // FindLast valor 3: 3
console.log('FindLastIndex valor 3:', numerosBuscarUltimo.findLastIndex(x => x === 3)); // FindLastIndex valor 3: 4

// INCLUDES - verificar si un arreglo incluye un valor
const frutasIncludes = ['manzana', 'banana', 'naranja'];
console.log('Arreglo de frutas:', frutasIncludes); // Arreglo de frutas: ['manzana', 'banana', 'naranja']
console.log('¿Incluye banana?', frutasIncludes.includes('banana')); // ¿Incluye banana?: true
console.log('¿Incluye mango?', frutasIncludes.includes('mango')); // ¿Incluye mango?: false

// INDEXOF & LASTINDEXOF - encontrar posición de un elemento
const numerosIndex = [1, 2, 3, 2, 1];
console.log('Arreglo a buscar:', numerosIndex); // Arreglo a buscar: [1, 2, 3, 2, 1]
console.log('Primer índice de 2:', numerosIndex.indexOf(2)); // Primer índice de 2: 1
console.log('Último índice de 2:', numerosIndex.lastIndexOf(2)); // Último índice de 2: 3

// FOREACH - ejecutar función para cada elemento
const frutasForEach = ['manzana', 'banana', 'naranja'];
console.log('Iterando sobre frutas:'); // Iterando sobre frutas:
frutasForEach.forEach((fruta, index) => {
    console.log(`Fruta ${index + 1}:`, fruta); // Fruta 1: manzana, etc.
});

// EVERY - probar si todos los elementos pasan una condición
const numerosEvery = [2, 4, 6, 8];
console.log('Números a probar:', numerosEvery); // Números a probar: [2, 4, 6, 8]
console.log('¿Todos los números son pares?', numerosEvery.every(x => x % 2 === 0)); // ¿Todos los números son pares?: true

// SOME - probar si algunos elementos pasan una condición
const numerosSome = [1, 3, 5, 6, 7];
console.log('Números a probar:', numerosSome); // Números a probar: [1, 3, 5, 6, 7]
console.log('¿Hay algún número par?', numerosSome.some(x => x % 2 === 0)); // ¿Hay algún número par?: true

// SORT - ordenar elementos del arreglo
const frutasSort = ['banana', 'manzana', 'naranja'];
console.log('Frutas desordenadas:', frutasSort); // Frutas desordenadas: ['banana', 'manzana', 'naranja']
frutasSort.sort();
console.log('Frutas ordenadas:', frutasSort); // Frutas ordenadas: ['manzana', 'banana', 'naranja']

const numerosSort = [4, 2, 5, 1, 3];
console.log('Números desordenados:', numerosSort); // Números desordenados: [4, 2, 5, 1, 3]
numerosSort.sort((a, b) => a - b);
console.log('Números ordenados:', numerosSort); // Números ordenados: [1, 2, 3, 4, 5]

// REVERSE - invertir el orden del arreglo
const numerosReverse = [1, 2, 3, 4];
console.log('Arreglo original:', numerosReverse); // Arreglo original: [1, 2, 3, 4]
numerosReverse.reverse();
console.log('Arreglo invertido:', numerosReverse); // Arreglo invertido: [4, 3, 2, 1]

// JOIN - convertir arreglo a cadena con separador
const frutasJoin = ['manzana', 'banana', 'naranja'];
console.log('Arreglo original:', frutasJoin); // Arreglo original: ['manzana', 'banana', 'naranja']
console.log('Unido con coma y espacio:', frutasJoin.join(', ')); // Unido con coma y espacio: manzana, banana, naranja

// TOSTRING - convertir arreglo a cadena (separados por comas)
const frutasString = ['manzana', 'banana', 'naranja'];
console.log('Arreglo original:', frutasString); // Arreglo original: ['manzana', 'banana', 'naranja']
console.log('Resultado de toString:', frutasString.toString()); // Resultado de toString: manzana,banana,naranja

// TOLOCALESTRING - convertir arreglo a cadena localizada
const precios = [1000, 2000, 3000];
console.log('Precios originales:', precios); // Precios originales: [1000, 2000, 3000]
console.log('Precios localizados (USD):', 
    precios.toLocaleString('en-US', { style: 'currency', currency: 'USD' })
); // Precios localizados (USD): $1,000.00, $2,000.00, $3,000.00

// ENTRIES - obtener iterador de pares clave/valor
const frutasEntries = ['manzana', 'banana'];
console.log('Arreglo original:', frutasEntries); // Arreglo original: ['manzana', 'banana']
console.log('Iteración de entradas:'); // Iteración de entradas:
for (const [índice, valor] of frutasEntries.entries()) {
    console.log(`Índice ${índice}:`, valor); // Índice 0: manzana, Índice 1: banana
}

// KEYS - obtener iterador de claves del arreglo
const frutasKeys = ['manzana', 'banana'];
console.log('Arreglo original:', frutasKeys); // Arreglo original: ['manzana', 'banana']
console.log('Iteración de claves:'); // Iteración de claves:
for (const clave of frutasKeys.keys()) {
    console.log('Clave:', clave); // Clave: 0, Clave: 1
}

// VALUES - obtener iterador de valores del arreglo
const frutasValues = ['manzana', 'banana'];
console.log('Arreglo original:', frutasValues); // Arreglo original: ['manzana', 'banana']
console.log('Iteración de valores:'); // Iteración de valores:
for (const valor of frutasValues.values()) {
    console.log('Valor:', valor); // Valor: manzana, Valor: banana
}

// COPYWITHIN - copiar elementos del arreglo a otra posición
const numerosCopy = [1, 2, 3, 4, 5];
console.log('Arreglo original:', numerosCopy); // Arreglo original: [1, 2, 3, 4, 5]
numerosCopy.copyWithin(0, 3, 4);
console.log('Después de copyWithin(0,3,4):', numerosCopy); // Después de copyWithin(0,3,4): [4, 2, 3, 4, 5]

// FILL - llenar elementos del arreglo con un valor estático
const arreglo = new Array(3);
console.log('Arreglo vacío:', arreglo); // Arreglo vacío: [empty × 3]
arreglo.fill(7);
console.log('Arreglo llenado con 7:', arreglo); // Arreglo llenado con 7: [7, 7, 7]
