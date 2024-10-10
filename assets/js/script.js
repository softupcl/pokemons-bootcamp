
import { fetchPokemon, findPokemonByUrl } from "./PokemonService.mjs";
import { pokemonCard } from "./Ui.mjs";



const botonAnterior = document.querySelector('#btnAnterior');
const botonSiguiente = document.querySelector('#btnSiguiente');

let pokemons;

window.onload = async()=>{
    pokemons = await fetchPokemon();
    console.log(pokemons)
    renderizaPokemons(pokemons)
}


const renderizaPokemons = async(pokemons)=>{
    let arrayPokemons = pokemons.results.map((data) => findPokemonByUrl(data.url) );

    const promesasCompletadas = await Promise.all(arrayPokemons);
    pokemonCard(promesasCompletadas)
}



botonAnterior.addEventListener('click',async()=>{
    if(!pokemons.previous){
        Swal.fire({
            title: 'Error!',
            text: 'No existen páginas previas',
            icon: 'error',
            confirmButtonText: 'Cool'
          });
     return;     
    }

    pokemons = await fetchPokemon(pokemons.previous);
    renderizaPokemons(pokemons);
});

botonSiguiente.addEventListener('click',async()=>{

    if(!pokemons.next){
        Swal.fire({
            title: 'Error!',
            text: 'No existen más páginas',
            icon: 'error',
            confirmButtonText: 'Cool'
          });
     return;     
    }

    pokemons = await fetchPokemon(pokemons.next);
    renderizaPokemons(pokemons);

});