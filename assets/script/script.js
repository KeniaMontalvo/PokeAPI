//botón global para el funcionamiento
const boton = document.getElementById("btn-pokemon");
let contenedorTarjetas = document.getElementById("contenedor");

boton.addEventListener("click", (e) => {
    e.preventDefault();
    pokemonElegido();
});


//Función para mostrar la información que irá en la tarjeta
function infoPokemon (datos) {
    let tiposPokemon = [];
    datos.types.forEach((type) =>
        tiposPokemon.push(type.type.name));
    generarTarjetaPokemon();
}

//Función para generar tarjetas de los pokemones
function generarTarjetaPokemon(datos){

    //Crear
    let tarjetaDiv = document.createElement("div"); //crea un container para mi tarjeta
    tarjetaDiv.className = "col-sm-6 col-md-6 col-lg-6"; //le especifico que es una columna

    //Crear el contenido de la tarjeta
    tarjetaDiv.innerHTML = `
    <div class="card mb-3 mx-auto">
        <div class="card-header">
            <div class="row">
                <p class="col nombre-principal">${datos.name}</p>
                <p class="col">${datos.base_experience}</p>
            </div>
        </div>
            <div class="card-body">
            <h5 class="card-title">${datos.name}</h5>
            <p>Altura: ${datos.height}</p>
            <p>Peso: ${datos.weight}</p>
        </div>
    </div>
`

    //Poner
    contenedorTarjetas.appendChild(tarjetaDiv);

} //cierra función crearTarjeta


function pokemonElegido() {
    let pokemonAleatorio = Math.floor(Math.random() * 100) + 1;
    fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonAleatorio}`)
    //llamamos la respuesta
    .then((respuesta) => respuesta.json())
    //mostramos la respuesta
    .then((datos) => {generarTarjetaPokemon(datos);
    })
    //en caso de error
    .catch((error) => console.log("Error", error))
}