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
        const response = await fetch("http://localhost:3000/servicios")
        
        // Guardar los datos como un json
        const data = await response.json()

        cardContainer.innerHTML = ""    // Eliminar el loader del html

        console.log(data)

        data.forEach(servicio => {
            const div = document.createElement("div")
            div.classList.add("card-equipo")

            // MEJORAR EL TEMA DE LA IMAGEN <------------------------------------------------------------
            div.innerHTML = `
                <img
                    src="../assets/favicon/momo_img.png"
                    alt="Logo de Il momo cafeteria"
                />
                <h3>$${servicio.precio}</h3>
                <h3>${servicio.titulo}</h3>`

            // Boton de mas info
            const btnInfo = document.createElement("button")
            btnInfo.textContent = "Mas Info"
            btnInfo.classList.add("btn-info")

            btnInfo.addEventListener("click", () => {
                servicioPorId(servicio)
            })

            div.appendChild(btnInfo)
            cardContainer.append(div)
        })
    } catch (error) {
        console.log(`Error. No se pudieron traer los datos de los servicios. ${error}`)
    }
}

async function servicioPorId(servicio) {

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
        const response = await fetch(`http://localhost:3000/servicios/${servicio.id}`)
        
        // Guardar los datos como un json
        const data = await response.json()

        cardContainer.innerHTML = ""    // Eliminar el loader del html

        console.log(data)

        // CREO LOS DATOS PARA MOSTRARLOS
        const div = document.createElement("div")
            // MEJORAR EL TEMA DE LA IMAGEN <------------------------------------------------------------
        div.innerHTML = `
            <h3>${servicio.titulo}</h3>
            <h3>$${servicio.precio}</h3>`

        // Boton de mas info
        const btnVolver = document.createElement("button")
        btnVolver.textContent = "Volver"
        btnVolver.classList.add("btn-volver")

        btnVolver.addEventListener("click", () => {
            cargarServicios()
        })

        div.appendChild(btnVolver)
        cardContainer.append(div)

    } catch (error) {

    }
}

cargarServicios()