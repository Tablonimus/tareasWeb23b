const url = "https://rickandmortyapi.com/api";

export async function buscarTodosLosPersonajes() {
  const data = await fetch(`${url}/character`); //pedimos datos a la api y llega como xml

  const dataJson = await data.json(); //convierto a json y obtengo como resultado un json  que tiene un {}

  const resultadosObtenidos = dataJson.results; // busco la propiedad results que es un []

  const resultadosFormateados = []; // array auxiliar para guardar nuestros datos nuevos

  resultadosObtenidos.forEach((personaje) => {
    //recorro ese array y pusheo lo que quiero al array vacio

    let personajeFormateado = {
      nombre: personaje.name,
      genero: personaje.gender,
      imagen: personaje.image,
      planetaDeOrigen: personaje.origin.name,
      urlPlaneta: personaje.origin.url || "No tiene planeta asociado",
    };

    resultadosFormateados.push(personajeFormateado);
  });

  return resultadosFormateados; // retornamos la variable no el .log()
}

export async function buscarPersonajesPorNombre(nombreDelPersonaje) {
  const data = await fetch(`${url}/character/?name=${nombreDelPersonaje}`); //pedimos datos a la api y llega como xml
  const dataJson = await data.json(); //convertimos la petición completa a json
  console.log("data", dataJson);

  const resultadosObtenidos = dataJson.results; //busco en la data los resultados de mi busqueda
  const resultadosFormateados = []; // array auxiliar para guardar nuestros datos nuevos

  resultadosObtenidos.forEach((personaje) => {
    //recorro ese array y pusheo lo que quiero al array vacio

    let personajeFormateado = {
      nombre: personaje.name,
      genero: personaje.gender,
      imagen: personaje.image,
      planetaDeOrigen: personaje.origin.name,
      urlPlaneta: personaje.origin.url || "No tiene planeta asociado",
    };

    resultadosFormateados.push(personajeFormateado);
  });

  console.log(resultadosFormateados);
  return resultadosFormateados;
}

export async function buscarTodosLosEpisodios() {
  const data = await fetch(`${url}/episode`); //aca llego xml
  const dataJson = await data.json(); //tranformo a json
  const resultadosObtenidos = dataJson.results;

  const resultadosFormateados = []; // array auxiliar para guardar nuestros datos nuevos

  resultadosObtenidos.forEach((episodio) => {
    //recorro ese array y pusheo lo que quiero al array vacio

    let episodioFormateado = {
      nombre: episodio.name,
      fechaDeEstreno: episodio.air_date,
      numeroDeEpisodio: episodio.episode,
    };

    resultadosFormateados.push(episodioFormateado);
  });

  console.log(resultadosFormateados);
  return resultadosFormateados;
}
