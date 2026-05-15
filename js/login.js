const form = document.querySelector('#formLogin')

  const email = document.querySelector('#email').value
  const contrasena = document.querySelector('#password').value

  async function login(email, contrasena) {
    try {
      const response = await fetch("https://trabajo-practico-3-back-end.onrender.com/login", {

        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ email, contrasena })
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Error en el login");
      }

      console.log("Login exitoso, datos del usuario:", data);

      perfiles(data.id);

    } catch (error) {
      alert(error.message);
    }
  }

login()