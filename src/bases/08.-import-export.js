//import { heroes } from './data/heroes'; cuando exportamos asi: export const heroes = [];
//import { heroes } from './data/heroes';

//import  heroes, {owners} from "./data/heroes";//heroes => Exportacion por defecto y owners => Exportación individual
//import  { heroes, owners } from "./data/heroes";//heroes => Exportacion por defecto y owners => Exportación individual
import  heroes from "../data/heroes";//heroes => Exportacion por defecto y owners => Exportación individual

/*const getHeroesById = (id) => {
    return heroes.find( ( heroe ) =>{
        if(heroe.id === id){
            return true;
        }
        else
        {
            return false;
        }
    });
}*/

/*const getHeroesById = (id) => {
    return heroes.find( ( heroe ) => heroe.id === id);
}*/

export const getHeroesById = ( id ) => heroes.find( ( heroe ) => heroe.id === id);

//console.log(  getHeroesById( 2 ) );

export const getHeroesByOwner = ( owner ) => heroes.filter( ( heroe ) => heroe.owner === owner);

//console.log( getHeroesByOwner( 'Marvel' ) );

//console.log(owners);
