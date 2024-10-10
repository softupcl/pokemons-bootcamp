const divPokemons = document.querySelector('#app');

export const pokemonCard=(data)=>{

    const pokemons = data.map((pokemon) =>
      `<div class="p-2">
        <div class="card" style="width: 18rem;">
            <img src="${pokemon.sprites.other.home.front_default}" class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">#${pokemon.id} - ${pokemon.name}</h5>
                <div>
                <audio controls class="mt-5">
                 <source src="https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/${pokemon.id}.ogg" type="audio/ogg"/>
                </audio>
                </div>     
                <a href="#" class="btn btn-primary text-center">Ver más</a>
            </div>
        </div>
    </div>`
        ).join('')    


divPokemons.innerHTML = pokemons;

}