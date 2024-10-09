// Challenge #1 - Functions

function oldRegularFunction(a) {
    par = a%2; 
    if (par === 0) {
        res = 'El numero es par';
    } else {
        res = 'El numero es impar';
    }
    return res;
}	

const newRegularFunction = function(a) {
    par = a%2; 
    if (par === 0) {
        res = 'El numero es par';
    } else {
        res = 'El numero es impar';
    }
    return res;
}

const arrowFunction = (a) => {
    par = a%2; 
    if (par === 0) {
        res = 'El numero es par';
    } else {
        res = 'El numero es impar';
    }
    return res;
}

// Función Old Regular Function
console.log(oldRegularFunction(10000));

// Función New Regular Function
console.log(newRegularFunction(10001));

// Función Arrow Function
console.log(arrowFunction(10000));