const activo = true;

const mensaje = ( activo ) ? 'Activo' : 'Inactivo';
console.log(mensaje)

const msg = activo && 'Activo';//Solo si la condicion es true se devuelve activo
console.log(msg);