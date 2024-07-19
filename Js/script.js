// Agrega un evento de escucha al formulario con el ID "contactForm"
document
  .getElementById("contactForm")
  .addEventListener("submit", function (event) {
    // Evita el envío del formulario y la recarga de la página
    event.preventDefault();

    // Obtiene los valores de los campos del formulario y los guarda en un objeto
    const formData = {
      name: document.getElementById("name").value,
      email: document.getElementById("email").value,
      address: document.getElementById("address").value,
      address1: document.getElementById("address1").value,
      address2: document.getElementById("address2").value,
      address3: document.getElementById("address3").value,
      message: document.getElementById("message").value,
      phone: document.getElementById("phone").value,
    };

    // Convierte el objeto de datos del formulario a formato JSON
    const jsonData = JSON.stringify(formData, null, 2);

    // Crea un Blob con los datos JSON y define el tipo de contenido
    const blob = new Blob([jsonData], { type: "application/json" });

    // Genera una URL de objeto para el Blob
    const url = URL.createObjectURL(blob);

    // Crea un elemento de enlace para descargar el archivo JSON
    const a = document.createElement("a");
    a.href = url;
    a.download = "contact-form.json"; // Nombre del archivo a descargar

    // Simula un clic en el enlace para iniciar la descarga del archivo
    document.body.appendChild(a);
    a.click();

    // Limpia el enlace del DOM y revoca la URL del objeto para liberar memoria
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  });

// Agrega un evento de escucha a todos los enlaces con la clase "nav-link"
document.querySelectorAll(".nav-link").forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    // Evita el comportamiento por defecto del enlace (navegación)
    e.preventDefault();

    // Obtiene el atributo href del enlace y desplaza suavemente a la sección correspondiente
    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth", // Configura el desplazamiento suave
      block: "start", // Alinea la sección al inicio de la vista
    });
  });
});
