let cantidad = document.getElementById("cantidad");
let boton = document.getElementById("generar");
let contraseña = document.getElementById("contrasena");

const cadenaCaracteres = "ABCDEFGHIJKLMNOPQRSTUVWYZabcdefghijklmnopqrstuvwyz0123456789/*.-@";

function generar() {

    let numeroDigitado = parseInt(cantidad.value);

    if (numeroDigitado < 8) {
        alert("La cantidad de caracteres debe ser mayor a 8");
    }

    if (numeroDigitado < 9) {
        alert("La contraseña es muy debil");
    }

    let password = "";
    for (let i = 0; i < numeroDigitado; i++) {

        let caracterAleatorio = cadenaCaracteres[Math.floor(Math.random() * cadenaCaracteres.length)];


        password += caracterAleatorio;

    }
    contraseña.value = password;
}

function limpio() {
    contrasena.value = "";
    cantidad.value = "";
}

