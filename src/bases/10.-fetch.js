const apiKey = 'PWnDmNVYj8xAHjPLstMlZfAbLPdhHYKH';

const peticion = fetch(`https://api.giphy.com/v1/gifs/random?api_key=${ apiKey }`);

/*peticion.then( resp => {
    resp.json().then( data => {
        console.log(data);
    });
}).catch(console.warn);*/

//Pimise anidadas es o mismo que la anterior
peticion
    .then(resp => resp.json())
    .then( ({ data }) => {
        const { url } = data.images.original;
        
        const img = document.createElement( 'img' );
        img.src = url;

        document.body.append( img );
    })
    .catch(console.warn);