const cardContainer = document.querySelector("#card-container");

async function perfil() {
  try {
    // Recuperar el id del usuario logueado
    const id = localStorage.getItem("idPerfil");
    if (!id) {
      alert("No hay usuario logueado");
      return;
    }

    const response = await fetch(
      `https://trabajo-practico-3-back-end.onrender.com/perfil/${id}`,
    );
    const perfil = await response.json();
    console.log(response);
    console.log(perfil);

    cardContainer.innerHTML = "";

    const div = document.createElement("div");

    div.innerHTML = `
            <img
                src=${perfil.foto} alt="Imagen del perfil"
            />
            <h2>${perfil.nombre}</h2>
            <p>${perfil.mail}</p>
            <p>${perfil.fechaRegistro}</p>
            <ul>${perfil.ultimosPedidos}</ul>
        `;
    cardContainer.append(div);
  } catch (error) {
    console.log(`Error, no se pudo traer el perfil. ${error}`);
  }
}

perfil()