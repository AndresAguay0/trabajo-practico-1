const form = document.querySelector('#formLogin')

form.addEventListener('submit', async (e) => {
  e.preventDefault()

  const email = document.querySelector('#email').value
  const contrasena = document.querySelector('#password').value

  try {
    const response = await fetch(
      'https://trabajo-practico-3-back-end.onrender.com/login',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          mail: email,
          contrasena
        })
      }
    )

    const data = await response.json()

    if (!response.ok) {
      throw new Error(data.error || 'Error en el login')
    }

    console.log('Login exitoso:', data)

    // guardar id del usuario
    localStorage.setItem('idPerfil', data.id)

    // redireccionar
    window.location.href = './perfil.html'

  } catch (error) {
    console.error(error)
    alert(error.message)
  }
})