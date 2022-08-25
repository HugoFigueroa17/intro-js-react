const persona = {
    nombre:'Hugo',
    apellido: 'Figueroa',
    edad: 26,
    direccion:{
        ciudad: 'Abasolo',
        zip:36970,
        lat: 3.123443,
        lng: 43.23454
    }
}


//console.log( { persona } );
//console.table(persona);

//const persona2 = persona;//Se hace una copia de la referencia de espacio en memoria no del valor
const persona2 = {...persona};//Spread operator
persona2.nombre = 'Peter';
console.log( persona )

console.log( persona2 );