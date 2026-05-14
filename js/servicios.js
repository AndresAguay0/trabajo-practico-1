const cardContainer = document.querySelector("#card-container")

async function cargarServicios() {
    try {
        
        if (!cardContainer) return
        cardContainer.innerHTML = `
            <div class="loader-container">
                <div class="loader"></div>
                <p>Obteniendo los datos. Por favor espere...</p>
            </div>`
    
        // Buscar datos en el back-end
        console.log("- Buscando los datos del back-end -")
        const response = await fetch("https://trabajo-practico-3-back-end.onrender.com/servicios")
        
        // Guardar los datos como un json
        const data = await response.json()

        cardContainer.innerHTML = ""    // Eliminar el loader del html

        console.log(data)

        data.forEach(servicio => {
            const div = document.createElement("div")
            div.classList.add("card-equipo")

            div.innerHTML = `
                <img
                    src=${servicio.img}
                    alt="Imagen del servicio"
                />
                <h3>$${servicio.precio}</h3>
                <h3>${servicio.titulo}</h3>`

            // Boton de mas info
            const btnInfo = document.createElement("button")
            btnInfo.textContent = "Mas Info"
            btnInfo.classList.add("btn-info")

            btnInfo.addEventListener("click", () => {
                servicioPorId(servicio.id)
            })

            div.appendChild(btnInfo)
            cardContainer.append(div)
        })
    } catch (error) {
        console.log(`Error. No se pudieron traer los datos de los servicios. ${error}`)
    }
}

async function servicioPorId(id) {

    try {
        if (!cardContainer) return

        cardContainer.innerHTML = ""
        cardContainer.innerHTML = `
            <div class="loader-container">
                <div class="loader"></div>
                <p>Obteniendo los datos. Por favor espere...</p>
            </div>`
        
        // Buscar datos en el back-end
        console.log("- Buscando los datos del back-end -")
        const response = await fetch(`https://trabajo-practico-3-back-end.onrender.com/servicios/${id}`)
        
        // Guardar los datos como un json
        const servicio = await response.json()

        cardContainer.innerHTML = ""    // Eliminar el loader del html

        console.log(servicio)

        // CREO LOS DATOS PARA MOSTRARLOS
        const div = document.createElement("div")
        div.classList.add("servicio-full")

        div.innerHTML = `
            <div>
                <img
                    src=${servicio.img}
                    alt="Imagen del servicio"
                />
            <div>
            <h3>${servicio.titulo}</h3>
            <h3>$${servicio.precio}</h3>
            <p>${servicio.descripcion}</p>`

        // Boton de mas info
        const btnVolver = document.createElement("button")
        btnVolver.textContent = "Volver"
        btnVolver.classList.add("btn-info")

        btnVolver.addEventListener("click", () => {
            cargarServicios()
        })

        div.appendChild(btnVolver)
        cardContainer.append(div)

    } catch (error) {
        console.log(`Error. No se pudieron traer los datos del servicio. ${error}`)
    }
}

cargarServicios()