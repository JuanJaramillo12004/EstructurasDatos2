// Challenge #4 - Queue

class cajero {
    constructor(name, time){
        this.name = name;
        this.time = time;
        this.people = [];
    }

    enqueue(name, time){
        const newPerson = new cajero(name, time);
        this.people.push(newPerson);
        return name;
    }

    dequeue(){
        let eliminado = this.people.shift();
        return `Persona "${eliminado.name}" eliminada`;
    }

    peek(){
        const person = this.people[0];
        return person ? `Name: ${person.name}, Time: ${person.time}` : 'Persona no encontrada';
    }

    size(){
        return this.people.length;
    }      

    isEmpty(){
        return this.people.length === 0;
    }

    print(){
        this.people.forEach(person => {
            console.log(`Name: ${person.name}, Time: ${person.time}`);
        });
    }
}

// Crear Cola
const QueueCajero = new cajero();

// Insertar Cola
console.log('------------------');
console.log('Enqueue');
console.log('------------------');
console.log(QueueCajero.enqueue('Juan', 5));
console.log(QueueCajero.enqueue('Maria', 10));
console.log(QueueCajero.enqueue('Pedro', 15));

// Eliminar Cola
console.log('------------------');
console.log('Dequeue: ', QueueCajero.dequeue());

// Buscar Cola
console.log('------------------');
console.log('Peek');
console.log('------------------');
console.log(QueueCajero.peek());

// Tamaño de la Cola
console.log('------------------');
console.log("Size: ", QueueCajero.size());

// Imprimir Cola
console.log('------------------');
console.log('Print');
console.log('------------------');
QueueCajero.print();