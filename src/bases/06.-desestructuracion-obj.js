//Desestructuracion
//Asignación desestructurante

const persona = {
    nombre: 'Hugo',
    edad: 26,
    clave: 'cvl-00123',
    //rango: 'Soldado'
}

//const { nombre, edad, clave} = persona;

//console.log( nombre );
//console.log( edad );
//console.log( clave );

const retornaPersona = ( { clave, nombre, edad, rango = 'Capitán' } )=>{
    //console.log( nombre, edad, rango )

    return {
        nombreClave: clave,
        anios: edad,
        latlng:{
            lat:1.274633483094,
            lng:2.383632739393
        }
    }
}

const { nombreClave, anios, latlng: { lat, lng } } = retornaPersona( persona );

console.log( nombreClave, anios );
console.log( lat, lng );