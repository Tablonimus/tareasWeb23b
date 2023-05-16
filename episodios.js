import { buscarTodosLosEpisodios } from "./api.js";

const root = document.getElementById("root");

async function mostrarEpisodios() {
  const episodios = await buscarTodosLosEpisodios();

  console.log(episodios);
  for (let i = 0; i < episodios.length; i++) {
    const episodio = episodios[i]; //i es la variable que cambia

    root.innerHTML += `  
        <div class="">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRoo9JnnGqS54vj88RmQmQF3pSeYDGNBRUgOA&usqp=CAU" />
          <div class="card-content">
            <span id="name">${episodio.nombre}</span>
            <span id="name">${episodio.fechaDeEstreno}</span>
            <span>${episodio.numeroDeEpisodio}</span>                    
          </div>
        </div>`;
  }
}

mostrarEpisodios();
