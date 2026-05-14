const cardContainer = document.getElementById("card-container");

async function perfiles() {

    try {

        if (!cardContainer) return;

        cardContainer.innerHTML = `
            <div class="loader-container">
                <div class="loader"></div>
                <p>Obteniendo los datos. Por favor espere...</p>
            </div>`;

        const response = await fetch(
            "https://trabajo-practico-3-back-end.onrender.com/perfil/1"
        );
        const data = await response.json();

        console.log(data);

        cardContainer.innerHTML = "";

        const div = document.createElement("div");

        div.classList.add("card");

        div.innerHTML = `
            <img src="${data.foto}" alt="Imagen del perfil" />
            <h2>${data.nombre}</h2>
            <p>${data.mail}</p>
            <p>${data.fechaRegistro}</p>

            <ul>
                ${data.ultimosPedidos
                .map((pedido) => `<li>${pedido}</li>`)
                .join("")}
            </ul>
        `;

        cardContainer.appendChild(div);

    } catch (error) {

        console.log(error);
        console.log("Error, no se pudieron mostrar los datos del perfil.");
    }
}

perfiles();