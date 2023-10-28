const inputEmail = document.getElementById("correo");
const inputContraseña = document.getElementById("password");
const form = document.getElementById("formulario-login");
const usuarioRechazado = document.getElementById("usuarioRechazado");
const divIngreso = document.querySelector("#btn-ingreso");
const dropUsuario = document.getElementById("dropdown-usuario");

//validaciones desde js en formulario
form.addEventListener("input", function () {
    const valorCorreo = inputEmail.value.trim();
    const valorContraseña = inputContraseña.value.trim();
    const patronCorreo = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
    const patronContraseña = /^(?=\w*\d)(?=\w*[A-Z])(?=\w*[a-z])\S{8,16}$/;
    inputContraseña.setAttribute("type", "password");

    if (valorCorreo < 3 || valorCorreo > 30 || !patronCorreo.test(valorCorreo)) {
        inputEmail.setCustomValidity(
            "El valor ingresado debe de ser mayor a 3, menor a 30 y debe de contener un @ con una direccion de correo electronico"
        );
    } else {
        inputEmail.setCustomValidity("");
    }
    if (
        valorContraseña.length < 8 ||
        valorContraseña.length > 16 ||
        !patronContraseña.test(valorContraseña)) {
        inputContraseña.setCustomValidity("Contraseña inválida");
    } else {
        inputContraseña.setCustomValidity("");
    }
});

//inicializo ls
let arrayUsuarios = JSON.parse(localStorage.getItem("users")) || [];
let arrayUsuario = [];

//evento de ingreso de usuario
form.addEventListener("submit", (e) => {
    e.preventDefault();
    let valorEmail = inputEmail.value;
    let valorContraseña = inputContraseña.value;
    let bandera = false;
    let usuarioEncontrado = 0;

    //busqueda de usuario en ls
    for (let i = 0; i < arrayUsuarios.length; i++) {
        if (
            valorEmail === arrayUsuarios[i].email &&
            valorContraseña === arrayUsuarios[i].contraseña
        ) {
            usuarioEncontrado = arrayUsuarios[i];
            bandera = true;
            break;
        }
    }
    //El usuario actual se encuentra en login_success
    if (bandera === true) {
        arrayUsuario.push(usuarioEncontrado);
        form.reset();
        localStorage.setItem("login_success", JSON.stringify(arrayUsuario));
        window.location.href = "../index.html";
        // usuarioIngresado();
    } else {
        usuarioRechazado.innerHTML = "<p>Contraseña incorrecta o usuario no encontrado</p>";
    }
});


const usuarioIngresado = () => {

    //inicio ls de usuario ingresado
    const user = JSON.parse(localStorage.getItem("login_success")) || false;

    //modificio navbar cuando ingresa usuario
    if (user) {
        dropUsuario.classList.remove("d-none");
        divIngreso.classList.add("d-none"); 
        window.location.href = "../index.html";
        console.log ("estoy ingresado")
    }
    console.log ("estoy ingresado en index")
}