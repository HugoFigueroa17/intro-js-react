//Template strings
const nombre = 'Hugo';
const apellido = 'Figueroa';

const fullname = `
${ nombre }
 ${ apellido }
 ${1+1}`; 
console.log( fullname );

function getSaludo(nombre){
    return 'Hola ' + nombre;
}

console.log(`Este es un texto: ${ getSaludo(nombre) }`);