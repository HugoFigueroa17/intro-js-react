//resolve: Se ejecuta cuando la promesa es exitosa o ya se termina correctamente

import { getHeroesById } from "./bases/08.-import-export";

//reject: Se va a ejecutar cuando la romesa falla o algo no se pueda cumplir
// const promesa = new Promise( (resolve,reject) =>{
//     setTimeout(() => {
//         const heroe = getHeroesById(2)
//         resolve(heroe);//El parametro que le pase al resolve lo recibirá el then
//         //reject( 'No se pudo encontrar el heroe' );//Se manda al catch
//     }, 2000);
// });

//promesa.then( (heroe) => {
//    console.log('Then de la promesa');
//    console.log(heroe);
//}).catch(err => console.warn(err));

const getHeroesByIdAsync = (id) => {
    return new Promise( (resolve,reject) =>{
        setTimeout(() => {
            const heroe = getHeroesById(id)
            
            heroe ? resolve(heroe) : reject( 'No se pudo encontrar el heroe' );
            resolve(heroe);//El parametro que le pase al resolve lo recibirá el then
            //reject( 'No se pudo encontrar el heroe' );//Se manda al catch
        }, 2000);
    });
}

getHeroesByIdAsync( 122 )
    .then((heroe)=>console.log("Heroe",heroe))
    .catch(err => console.warn( err ) );

    getHeroesByIdAsync( 1 )
    .then(console.log)
    .catch(console.warn);