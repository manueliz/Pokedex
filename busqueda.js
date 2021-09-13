var nombre;
var resultado;
function BuscarPoke(){
    var nombreElement = document.getElementById("nombre");
    nombre = nombreElement.value;
    fetch(`https://pokeapi.co/api/v2/pokemon/${nombre}`)
    .then(data => console.log(data.json()))

}
