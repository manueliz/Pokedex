var nombre;
var namePoke;
var sprite;
var id;
const pokeTypes = document.querySelector('[data-poke-types]');
const pokeStats = document.querySelector('[data-poke-stats]');

const typeColors = {
    electric: '#FFEA70',
    normal: '#B09398',
    fire: '#FF675C',
    water: '#0596C7',
    ice: '#AFEAFD',
    rock: '#999799',
    flying: '#7AE7C7',
    grass: '#4A9681',
    psychic: '#FFC6D9',
    ghost: '#561D25',
    bug: '#A2FAA3',
    poison: '#795663',
    ground: '#D2B074',
    dragon: '#DA627D',
    steel: '#1D8A99',
    fighting: '#2F2F2F',
    default: '#2A1A1F',
};

function BuscarPoke(){

    var nombreElement = document.getElementById("nombre");
    nombre = nombreElement.value;
    fetch(`https://pokeapi.co/api/v2/pokemon/${nombre}`)
        .then(data => data.json())
        .then(response => pokeData(response))
        .catch(err => missingNo())

}

function pokeData (data){

    sprite =  data.sprites.front_default;
    namePoke = data.name;
    id = data.id;
    const { stats, types } = data;
    var spriteElement = document.getElementById('sprite');
    var namePokeElement = document.getElementById("namePoke");
    var idElement = document.getElementById("id");
    spriteElement.setAttribute('src', sprite);
    namePokeElement.innerHTML = namePoke;
    idElement.innerHTML = id;
    typesPoke(types);
    setBackColor(types);
    statsPoke(stats);
}

function typesPoke (types){

    pokeTypes.innerHTML = '';
    types.forEach(type => {
        const typeTextElement = document.createElement("div");
        typeTextElement.style.color = typeColors[type.type.name];
        typeTextElement.textContent = type.type.name;
        pokeTypes.appendChild(typeTextElement);
    });
}

function setBackColor (types){

    var spriteElement = document.getElementById('sprite');
    const colorOne = typeColors[types[0].type.name];
    const colorTwo = types[1] ? typeColors[types[1].type.name] : typeColors.default;
    spriteElement.style.background =  `radial-gradient(${colorTwo} 33%, ${colorOne} 33%)`;
    spriteElement.style.backgroundSize = ' 5px 5px';

}

function statsPoke(stats){
    pokeStats.innerHTML = '';
    stats.forEach(stat => {
        const statElement = document.createElement("div");
        const statElementName = document.createElement("div");
        const statElementAmount = document.createElement("div");
        statElementName.textContent = stat.stat.name;
        statElementAmount.textContent = stat.base_stat;
        statElement.appendChild(statElementName);
        statElement.appendChild(statElementAmount);
        pokeStats.appendChild(statElement);
    });
}


function contactos(){
    alert("Informacion de contacto \nCorreos: \nA01321810@itesm.mx\nA01328971@itesm.mx");
}

const missingNo = () => {

    var spriteElement = document.getElementById('sprite');
    var namePokeElement = document.getElementById("namePoke");
    var idElement = document.getElementById("id");
    spriteElement.setAttribute('src', 'Missigno.png');
    namePokeElement.innerHTML = "MissingNo";
    idElement.innerHTML = "";
    pokeTypes.innerHTML = '';
}