async function perfiles() {

    try {

        const response = await fetch("https://trabajo-practico-3-back-end.onrender.com/login");

        const data = await response.json();

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

perfiles();