var data;
function Mypokemon(){
    data = Math.floor(Math.random() * 800) + 1;
    fetch(`https://pokeapi.co/api/v2/pokemon/${data}`)
    .then(data => console.log(data))
  }