// Challenge #6 - Graph

class Person {
    constructor(name, age, city) {
        this.name = name;
        this.age = age;
        this.city = city;
    }
}

class City {
    constructor(name) {
        this.name = name;
    }
}

class Graph {
    constructor() {
        this.nodes = [];
        this.adjList = {};
    }

    addNode(node) {
        this.nodes.push(node);
        this.adjList[node] = [];
    }

    addEdge(node1, node2) {
        this.adjList[node1].push(node2);
        this.adjList[node2].push(node1);
    }

    printGraph() {
        console.log(this.adjList);
    }

    searchNode(value){
        if (!this.nodes.length) {
            return null;
        }
        return this.nodes.find(node => node === value);
    }

    printAdjacencyList(node){
        if (this.searchNode(node)) {
            console.log(this.adjList[node]);
        } else {
            console.log('Node not found');
        }
    }

    peopleInCity(cityName) {
        const people = this.nodes.filter(node => node instanceof Person && node.city.name === cityName);
        if (people.length > 0) {
            console.log(`People living in ${cityName}:`);
            people.forEach(person => console.log(`- ${person.name}, Age: ${person.age}`));
        } else {
            console.log(`No people found living in ${cityName}`);
        }
    }
}

// Crear Grafo
const myGraph = new Graph();

// Crear Ciudades
const city1 = new City('New York');
const city2 = new City('Los Angeles');

// Crear Personas
const person1 = new Person('Alice', 30, city1);
const person2 = new Person('Bob', 25, city1);
const person3 = new Person('Charlie', 35, city2);
const person4 = new Person('David', 40, city2);

// Insertar Nodos
myGraph.addNode(city1);
myGraph.addNode(city2);
myGraph.addNode(person1);
myGraph.addNode(person2);
myGraph.addNode(person3);
myGraph.addNode(person4);

// Insertar uniones
myGraph.addEdge(person1, city1);
myGraph.addEdge(person2, city1);
myGraph.addEdge(person3, city2);
myGraph.addEdge(person4, city2);

// Imprimir Grafo
console.log('------------------');
console.log('Graph:');
console.log('------------------');
myGraph.printGraph();
console.log('------------------');
myGraph.peopleInCity('New York');
console.log('------------------');
myGraph.peopleInCity('Los Angeles');
console.log('------------------');
myGraph.peopleInCity('Chicago');