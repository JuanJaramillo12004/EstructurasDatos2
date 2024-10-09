// Challenge #5 - Tree

class Person {
  constructor(name, birthDate) {
    this.name = name;
    this.birthDate = birthDate;
    this.children = [];
  }
}

class FamilyTree {
  constructor(root) {
    this.root = root;
  }

  search(name, node = this.root) {
    if (!this.root) {
      return null;
    }

    if (this.root.name === name) {
      return this.root;
    } else {
      const children = node.children;
      const inChildren = children.find((child) => child.name === name);
      if (inChildren) {
        return inChildren;
      } else {
        let hasChildren;
        children.forEach((item) => {
          if (hasChildren) {
            return;
          }

          hasChildren = this.search(name, item);
        });

        return hasChildren;
      }
    }
  }

  insert(value, parent) {
    const newNode = new Node(name, birthDate);

    if (!parent) {
      if (!this.root) {
        this.root = newNode;
      } else {
        return null;
      }
    } else {
      const parentNode = this.search(parent);
      parentNode.children.push(newNode);
    }
  }

  preOrder(node = this.root) {
    if (!node) {
      return;
    }

    console.log(node.name, node.birthDate, node.children);

    node.children.forEach((child) => {
      this.preOrder(child);
    });
  }

  postOrder(node = this.root) {
    if (!node) {
      return;
    }

    node.children.forEach((child) => {
      this.postOrder(child);
    });

    console.log(node.name, node.birthDate, node.children);
  }

  inOrder(node = this.root) {
    if (!node) {
      return;
    }

    if (node.children.length === 0) {
      console.log(node.name, node.birthDate, node.children);
    } else {
      this.inOrder(node.children[0]);
      console.log(node.name, node.birthDate, node.children);

      for (let i = 1; i < node.children.length; i++) {
        this.inOrder(node.children[i]);
      }
    }
  }
}

// Personas
const abuelaNina = new Person("Abuela Nina", "1960-01-01");
const abueloCarlos = new Person("Abuelo Carlos", "1957-12-01");
const madreMaria = new Person("Madre Maria", "1980-05-01");
const padreJulio = new Person("Padre Julio", "1978-07-01");
const yo = new Person("Mauricio", "1990-10-01");
const hermanoGerman = new Person("Hermano German", "1995-02-01");
const hijoLuis = new Person("Hijo Luis", "2015-12-01");
const hijaMariana = new Person("Hija Mariana", "2017-01-01");

// Árbol genealógico
const familyTree = new FamilyTree(abuela);

// Relaciones
abuelaNina.children.push(madreMaria);
abuelaNina.children.push(padreJulio);
madreMaria.children.push(yo);
padreJulio.children.push(hermanoGerman);
yo.children.push(hijoLuis);
yo.children.push(hijaMariana);

// Búsquedas
console.log("------------------");
console.log("Búsqueda");
console.log("------------------");
console.log(familyTree.search("Hermano German"));

// Recorridos
console.log("------------------");
console.log("PreOrder");
console.log("------------------");
familyTree.preOrder();
console.log("------------------");
console.log("PostOrder");
console.log("------------------");
familyTree.postOrder();
console.log("------------------");
console.log("InOrder");
console.log("------------------");
familyTree.inOrder();
