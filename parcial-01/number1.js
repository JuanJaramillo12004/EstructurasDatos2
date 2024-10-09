/*  1.	Implementar una función que tenga como parámetros dos listas enlazadas de números ordenados de mayor a menor 
        y que retorne una nueva lista con la unión de ambas y sus elementos ordenados de menor a mayor.
 */

class Lista {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class ListaLinkeada {
    constructor() {
        this.head = null;
        this.tail = null;
    }

    // Añadir un nuevo nodo al final de la lista
    append(value) {
        const newNode = new Lista(value);
        if (this.head === null) {
            this.head = newNode;
        } else {
            this.tail.next = newNode;
        }
        this.tail = newNode;
    }

    // Convertir la lista en un array
    toArray() {
        const result = [];
        let current = this.head;
        while (current !== null) {
            result.push(current.value);
            current = current.next;
        }
        return result;
    }

    // Crear una lista de un array
    static fromArray(values) {
        const list = new ListaLinkeada();
        for (const value of values) {
            list.append(value);
        }
        return list;
    }
}

function UnionOrdenarLista(list1, list2) {
    // Convertir ambas listas enlazadas a arrays
    const values1 = list1.toArray();
    const values2 = list2.toArray();

    // Fusionar los arrays y ordenarlos
    const sortedValues = [...values1, ...values2].sort((a, b) => a - b);

    // Crear una nueva lista enlazada desde el array ordenado
    return ListaLinkeada.fromArray(sortedValues);
}

// Ejemplo de uso:
const list1 = ListaLinkeada.fromArray([50, 40, 30, 20, 10, 5, 3, 2, 1]);
const list2 = ListaLinkeada.fromArray([25, 15, 13, 12, 11, 9, 8, 7, 6, 4]);

const sortedList = UnionOrdenarLista(list1, list2);
console.log(sortedList.toArray());  // Output: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 15, 20, 25, 30, 40, 50]