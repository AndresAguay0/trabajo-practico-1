const cardContainer = document.querySelector("#card-container");

async function cargarPerfil() {
    try {

        if (!cardContainer) return
        cardContainer.innerHTML = `
            <div class="loader-container">
                <div class="loader"></div>
                <p>Obteniendo los datos. Por favor espere...</p>
            </div>`  
                  
        const response = await fetch("https://trabajo-practico-3-back-end.onrender.com/perfil");

        const data = await response.json();
        
        cardContainer.innerHTML = ""
        
        console.log(data);

        data.forEach((perfil) => {

            const div = document.createElement("div");

            div.classList.add("card");

            div.innerHTML = `
                <img
                    src=${perfil.foto} alt="Imagen del perfil"
                />
                <h2>${perfil.nombre}</h2>
                <p>${perfil.mail}</p>
                <p>${perfil.fechaRegistro}</p>
                <ul>${perfil.ultimosPedidos}</ul>
            `;

            document.body.appendChild(div);
        });

    } catch {

        console.log("Error, no se pudieron mostrar los datos del perfil.");
    }
}

cargarPerfil();