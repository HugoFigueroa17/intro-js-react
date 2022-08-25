const saludar = function(nombre){
    return `Hola, ${nombre}`;
}


const saludar2 = (nombre)=>{//Funcion flecha
    return `Hola, ${nombre}`;
}

const saludar3 = (nombre)=>`Hola, ${nombre}`;//Se expresa asi si solo lleva un return
const saludar4 = ()=>`Hola Mundo`;
//saludar = 30;
console.log(saludar3('Hugo'));
console.log(saludar4());

const getUser = () => {
    return {
        uid: 'ABC123',
        username:'El_User123'
    }
}

const getUser2 = () => ({
    uid: 'ABC123',
    username:'El_User123'
})
console.log(getUser());
console.log(getUser2());

//Tarea

function getUsuarioActivo( nombre ){
    return {
        uid:'ABCD567',
        username:nombre
    }
}

const usuarioActivo = getUsuarioActivo('Hugo');
console.log( usuarioActivo );

//Transformar a una funcion flecha
console.log('Transformar a una funcion flexha');

const getUsuarioActivo2 = (nombre)=>({
        uid:'ABCD567',
        username:nombre
});
const userActivo = getUsuarioActivo2('Jackiie')
console.log(userActivo);