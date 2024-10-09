/*  2.	Modificar el algoritmo de árboles binarios, implementar una función para calcular la altura de un árbol.
 */

class TreeNode {
    constructor(value = 0, left = null, right = null) {
        this.value = value;
        this.left = left;
        this.right = right;
    }
}

function CalcularAltura(root) {
    if (root === null) {
        return 0; // Para un árbol vacío, la altura es 0
    }

    // Calcular la altura de los hijos izquierdo y derecho
    const leftHeight = CalcularAltura(root.left);
    const rightHeight = CalcularAltura(root.right);

    // La altura del árbol es la máxima altura de los hijos más 1
    return Math.max(leftHeight, rightHeight) + 1;
}

// Crear un árbol binario
const nodo1 = new TreeNode(22);
const nodo2 = new TreeNode(11, null, nodo1);
const nodo3 = new TreeNode(12);
const nodo4 = new TreeNode(2, nodo2, nodo3);
const nodo5 = new TreeNode(15);
const nodo6 = new TreeNode(20);
const nodo7 = new TreeNode(45, nodo5, nodo6);
const root = new TreeNode(33, nodo4, nodo7);

// Calcular la altura del árbol
const height = CalcularAltura(root);
console.log(`La altura del árbol es ${height}`);