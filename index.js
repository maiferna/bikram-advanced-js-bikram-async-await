//DESARROLLA AQUI TUS SOLUCIONES


// EJERCICIO 1

const getRandomPokemon = async() => {
    let response = await fetch('https://pokeapi.co/api/v2/pokemon/');
    let data = await response.json();
    let count = data.count;
    let randomId = Math.floor(Math.random() * count);
    let information = await fetch(`https://pokeapi.co/api/v2/pokemon/${randomId}`);
    let datos = await information.json();
    return (datos);
}


// EJERCICIO 2

async function getImageAndName (pokemon){

    let response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`)
    let data = await response.json();
    let name = data.name;
    let img = data.sprites.front_default;
    return {name, img}
}


// EJERCICIO 3

const printImageAndName = async () => {
    const respuesta = await fetch('https://pokeapi.co/api/v2/pokemon/');
    const data = await respuesta.json();
    return `
        <section>
            <img src="${data.url}" alt="${data.name}">
            <h1>${data.name}</h1>
        </section>
    `;
}



// EJERCICIO 4

const getRandomDogImage = async () => {
    const image = await fetch('https://dog.ceo/api/breeds/image/random');
    const data = await image.json();
    return data.message;
}


// EJERCICIO 5

const getRandomPokemonImage = async() => {
    let response = await fetch('https://pokeapi.co/api/v2/pokemon/');
    let data = await response.json();
    let count = data.count;
    let randomId = Math.floor(Math.random() * count);
    let information = await fetch(`https://pokeapi.co/api/v2/pokemon/${randomId}`);
    let datos = await information.json();
    return (datos.sprites.front_default);
}


// EJERCICIO 6

const getRandomCharacter = async() => {
    let character = await fetch('https://rickandmortyapi.com/api/character');
    let data = await character.json();
    let count = data.info.count;
    let randomId = Math.floor(Math.random() * count);
    let information = await fetch(`https://rickandmortyapi.com/api/character/${randomId}`);
    let datos = await information.json();
    return (datos);
}


// EJERCICIO 7

const getRandomCharacterInfo = async () => {
    const character = await fetch('https://rickandmortyapi.com/api/character/1');
    const data = await character.json();
    const img = data.image;
    const name = data.name;
    const episodes = data.episode;
    const episodeResponse = await fetch( "https://rickandmortyapi.com/api/episode/1");
    const episodeData = await episodeResponse.json();
    const firstEpisode = episodeData.name;
    const dateEpisode = episodeData.air_date;
    return { img, name, episodes, firstEpisode, dateEpisode };
};

