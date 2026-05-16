const cardContainer = document.querySelector("#card-container");

async function perfil() {

  try {

    const id = localStorage.getItem("idPerfil");

    if (!id) {
      alert("No hay usuario logueado");
      return;
    }

    const response = await fetch(
      `https://trabajo-practico-3-back-end.onrender.com/perfil/${id}`
    );

    const perfil = await response.json();

    console.log(perfil);

    cardContainer.innerHTML = "";

    const div = document.createElement("div");

    div.innerHTML = `
      <div class= cardPerfil>
        <img src="${perfil.foto}" alt="Imagen del perfil"/>

        <h2>${perfil.nombre}</h2>

        <p>Mail: ${perfil.mail}</p>

        <p>Fecha registro: ${perfil.fechaRegistro}</p>

        <ul>
          Ultimos pedidos:
          ${perfil.ultimosPedidos
            .map((pedido) => `<li>${pedido}</li>`)
            .join("")}
        </ul>
      </div>
    `;

    cardContainer.append(div);

  } catch (error) {
    console.log(`Error, no se pudo traer el perfil. ${error}`);
  }
}

perfil();
