// Variables
const nombreInput = document.querySelector("#nombre");
const nombreEmail = document.querySelector("#email");
const nombreMensaje = document.querySelector("#mensaje");
const formulario = {nombre: "", email: "", mensaje: ""}
const enviarForm = document.querySelector("#enviar");
const elForm = document.querySelector(".formulario");

// Funciones
function escribir(a) {
   formulario[a.target.id] = a.target.value;
};
function mostarAdvertencia(mensaje, error = null) {
    const verificacion = document.createElement("P");
    verificacion.textContent = mensaje;
    verificacion.classList.add("centrar-texto");
    if (error === "error") {
        verificacion.classList.add("error");
    } else {
        verificacion.classList.add("correcto");
    };
    console.log(verificacion);
    elForm.appendChild(verificacion);
    setTimeout(() => {
        verificacion.remove();
    }, 3000);

};
// Events
nombreInput.addEventListener("input" , escribir);
nombreEmail.addEventListener("input" , escribir);
nombreMensaje.addEventListener("input" , escribir);

// Validar formulario
enviarForm.addEventListener("click", function(evento) {
    evento.preventDefault();
    const {nombre, email, mensaje} = formulario;

    if (nombre == "" || email == "" || mensaje == "") {
        return mostarAdvertencia("Rellene todos los campos", "error");
    }
    mostarAdvertencia("Se envio su formulario")
        console.log(formulario);
        console.log("Formulario enviado");
});