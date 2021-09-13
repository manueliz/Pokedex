var nombre;
var namePoke;
var sprite;

function BuscarPoke(){

    var nombreElement = document.getElementById("nombre");
    nombre = nombreElement.value;
    fetch(`https://pokeapi.co/api/v2/pokemon/${nombre}`)
        .then(data => data.json())
        .then(response => renderPokemonData(response))
        .catch(err => renderNotFound())

}

function renderPokemonData(data){

    sprite =  data.sprites.front_default;
    namePoke = data.name;
    var spriteElement = document.getElementById('sprite');
    var namePokeElement = document.getElementById("namePoke");
    spriteElement.setAttribute('src', sprite);
    namePokeElement.innerHTML = namePoke;

}

const renderNotFound = () => {
    var spriteElement = document.getElementById('sprite');
    var namePokeElement = document.getElementById("namePoke");
    spriteElement.setAttribute('src', 'Missigno.png');
    namePokeElement.innerHTML = "MissingNo";
}