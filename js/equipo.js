const cardContainer = document.querySelector("#card-container");

async function cargarEquipo() {
  try {
    if (!cardContainer) return;
    cardContainer.innerHTML = `
            <div class="loader-container">
                <div class="loader"></div>
                <p>Cocinando los datos, por favor espera...</p>
            </div>
        `;

    const response = await fetch(
      "https://trabajo-practico-3-back-end.onrender.com/equipo",
    );
    const data = await response.json();

    cardContainer.innerHTML = ` `;

    console.log(response);
    console.log(data);

    data.forEach((equipo) => {
      const div = document.createElement("div");
      div.classList.add("card");

      div.innerHTML = `
        <div class="card-equipo">
          <img src="${equipo.imagen}" alt="${equipo.nombre}">
          <h1>${equipo.nombre}</h1>
          <h2>${equipo.puesto}</h2>
          <p>${equipo.desc}</p>
        </div>
      `;

      cardContainer.append(div);
    });
  } catch (error) {
    console.log("Error, no se pudieron traer los datos del equipo.", error);
  }
}

cargarEquipo();
