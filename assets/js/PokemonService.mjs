export const fetchPokemon = async (url = 'https://pokeapi.co/api/v2/pokemon') => {

    try {
        const response = await fetch(url);
        const data = await response.json();

        return data;

    } catch (error) {
        console.error(error);
        return error;
    }
}

export const findPokemonByUrl=async(url)=>{

    try {
        const response = await fetch(url);
        const data = await response.json();

        return data;

    } catch (error) {
        console.log(error)
        return error;
    }

}