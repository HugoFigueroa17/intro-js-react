//Arreglos en JS

//const arreglo = new Array(4);//Usar cuando tenemos un tamaño fijo
const arreglo = [1,2,3,4];

//No usar el push, modifica el objeto principal
//arreglo.push(1);
//arreglo.push(2);
//arreglo.push(3);
//arreglo.push(4);

//let arreglo2 = arreglo;
let arreglo2 = [ ...arreglo, 5 ];

const arreglo3 = arreglo2.map(function(numero){
    return numero * 2;
});

console.log(arreglo);
console.log(arreglo2);
console.log(arreglo3);