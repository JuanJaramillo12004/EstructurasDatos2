// Challenge #2 - Linked List

class Tasks {
  constructor(title, description, next = null) {
    this.title = title;
    this.description = description;
    this.next = next;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  append(title, description) {
    const newTask = new Tasks(title, description);
    if (!this.head) {
      this.head = newTask;
    } else {
      this.tail.next = newTask;
    }
    this.tail = newTask;
  }

  peek(title, current = this.head) {
    if (this.head === null) {
      return false;
    }
    if (current.title === title) {
      return current;
    }
    return this.peek(title, current.next);
  }

  size(current = this.head, count = 0) {
    if (!current) {
        return count
    }
    return this.size(current.next, count + 1)
}

  remove(title, current = this.head, prev = null) {
    if (current === null) {
      return false;
    }
    if (current.title === title) {
      if (prev === null) {
        this.head = current.next;
      } else {
        prev.next = current.next;
      }
      if (current.next === null) {
        this.tail = prev; 
      }
      return true;
    }
    return this.remove(title, current.next, current);
  }

  print() {
    let task = this.head;
    while (task != null) {
      console.log(
        `Task: ${task.title} | Description: ${task.description} | Next ${
          task.next ? task.next.title : 'null' 
        }`
      );
      task = task.next;
    }
  }
}

// Crear Linked List
const linkedList = new LinkedList();

// Insertar a la Linked List
console.log('------------------');
console.log('Append');
console.log('------------------');
linkedList.append('Tarea 1', 'Hacer la cama');
linkedList.append('Tarea 2', 'Lavar los platos');
linkedList.append('Tarea 3', 'Hacer la comida');
linkedList.print();

// Buscar en la Linked List
console.log('------------------');
console.log('Peek');
console.log('------------------');
console.log(linkedList.peek('Tarea 1'));

// Tamaño de la Linked List después de insertar
console.log('------------------');
console.log('Size after append:', linkedList.size());
console.log('------------------');

// Eliminar de la Linked List
console.log('Remove Tarea 2: ', linkedList.remove('Tarea 2'));
console.log('------------------');

// Imprimir la Linked List
console.log('Print');
console.log('------------------');
linkedList.print();

// Tamaño de la Linked List después de eliminar
console.log('------------------');
console.log('Size after remove:', linkedList.size());
console.log('------------------');