const cardContainer = document.getElementById("card-container")

async function cargarServicios() {
    try {
        if (!cardContainer) return
        
        // Loader
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
    } catch (error) {
        console.log(`Error. No se pudieron traer los datos de los servicios. ${error}`)
    }
}