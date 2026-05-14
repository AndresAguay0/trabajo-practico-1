const form = document.querySelector('#login')

form.addEventListener('submit', async (e) => {
  e.preventDefault()

  const mail = document.querySelector('#mail').value
  const contrasena = document.querySelector('#contrasena').value

  try {
    const response = await fetch('https://trabajo-practico-3-back-end.onrender.com/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ mail, contrasena })
    })

    if (response.ok) {
      const perfil = await response.json()
      console.log('Inicio de sesión exitoso:', perfil)
      localStorage.setItem('idPerfil', perfil.id)

      window.location.href = 'perfil.html'
    } else {
      alert('La contraseña y/o el usuario es/son incorrecto/s')
    }
  } catch (error) {
    console.error('Error en login:', error)
  }
})