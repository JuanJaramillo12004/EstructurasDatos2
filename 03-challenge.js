// Challenge #3 - Stack

class Books {
  constructor(name, ISBN, author, editorial) {
    this.name = name;
    this.ISBN = ISBN;
    this.author = author;
    this.editorial = editorial;
    this.books = [];
  }

  push(name, ISBN, author, editorial) {
    const newBook = new Books(name, ISBN, author, editorial);
    this.books.push(newBook);
    return name;
  }

  pop() {
    let eliminado = this.books.pop()
    return `Libro "${eliminado.name}" eliminado`;
  }

  peek(ISBN) {
    const book = this.books.find(book => book.ISBN === ISBN);
    return book ? `Name: ${book.name}, ISBN: ${book.ISBN}, Author: ${book.author}, Editorial: ${book.editorial}` : 'Book not found';
  }

  size(){
    return this.books.length;
  }

  print(){
    this.books.forEach(book => {
      console.log(`Name: ${book.name}, ISBN: ${book.ISBN}, Author: ${book.author}, Editorial: ${book.editorial}`);
    });
  }
}

// Crear Pila
const StackBooks = new Books();

// Insertar a la Pila
console.log('------------------');
console.log('Push');
console.log('------------------');
console.log(StackBooks.push('Harry Potter y la piedra filosofal', '978-84-9838-798-9', 'J.K. Rowling', 'Salamandra'));
console.log(StackBooks.push('El principito', '978-84-272-0120-8', 'Antoine de Saint-Exupéry', 'Ediciones Salamandra'));
console.log(StackBooks.push('El señor de los anillos', '978-84-450-7421-2', 'J.R.R. Tolkien', 'Minotauro'));

// Eliminar de la Pila
console.log('------------------');
console.log('Pop: ', StackBooks.pop());
console.log('------------------');

// Buscar en la Pila
console.log('Peek');
console.log('------------------');
console.log(StackBooks.peek('978-84-272-0120-8'));

// Tamaño de la Pila
console.log('------------------');
console.log('Size: ', StackBooks.size());

// Imprimir la Pila
console.log('------------------');
console.log('Print');
console.log('------------------');
StackBooks.print();
