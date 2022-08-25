//Desestructuracion de arreglos
const personajes = ['Goku','Vegeta','Trunks'];

const [ , ,p3] = personajes;

console.log( p3 );

const retornaArreglo = () =>{
    return ['ABC',123];
}

const [ letras, numeros ] = retornaArreglo();
console.log(letras, numeros);

//Tarea
const useeState = ( valor ) => {
    return [ valor,()=>{ console.log('Hola Mundo') } ];
}

const arr = useeState( 'Goku' );
arr[1]();//Llama la función del console.log
console.log(arr);

const [ nombre, setNombre ] = useeState( 'Goku' );

console.log( nombre );
setNombre();