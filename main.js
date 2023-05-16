import { buscarPersonajesPorNombre, buscarTodosLosPersonajes } from "./api.js";

const root = document.getElementById("root");

async function mostrarPersonajes() {
  //1- Tengo que usar la funcion buscarTodosLosPersonajes Y ME lo guardo en una variable!!ASINCRONO => const personajes= [{}.{}]
  const personajes = await buscarTodosLosPersonajes();

  //2- Mostrar cada personaje =>
  //  a- recorrer un array = for map forEach filter
  //  b - por cada objeto del array voy a mostrar una tarjeta=> hay que hacer estilo y definir el diseño
  //hacer el html con la tarjeta y el css aparte- crear estructura correspondiente

  for (let i = 0; i < personajes.length; i++) {
    const personaje = personajes[i]; //i es la variable que cambia

    root.innerHTML += `  
    <div class="card">
      <img src=${personaje.imagen} />
      <div class="card-content">
        <span id="name">${personaje.nombre}</span>
        <span>${personaje.genero}</span>
        <span>${personaje.planetaDeOrigen}</span>
        
      </div>
    </div>`;
  }
}

mostrarPersonajes();

const buscador = document.getElementById("buscador"); //ES EL FORM <form>

buscador.addEventListener("submit", async (e) => {
  e.preventDefault();

  root.innerHTML = `<img src="https://media.tenor.com/t5DMW5PI8mgAAAAi/loading-green-loading.gif" />
  `;

  const nombreDelPersonaje = document.getElementById("input-buscar").value; //BUSCO LO QUE ESCRIBE EL USUARIO

  const personajes = await buscarPersonajesPorNombre(nombreDelPersonaje); //BUSCO LOS PERSONAJES
  root.innerHTML = ``;

  for (let i = 0; i < personajes.length; i++) {
    const personaje = personajes[i]; //i es la variable que cambia

    root.innerHTML += `  
    <div class="card">
      <img src=${personaje.imagen} />
      <div class="card-content">
        <span id="name">${personaje.nombre}</span>
        <span>${personaje.genero}</span>
        <span>${personaje.planetaDeOrigen}</span>
        
      </div>
    </div>`;
  }
});
