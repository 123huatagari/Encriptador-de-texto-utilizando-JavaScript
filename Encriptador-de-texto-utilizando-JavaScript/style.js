function encriptar() {
    var mensaje = document.getElementById("mensaje").value;
    var clave = parseInt(document.getElementById("clave").value);
    var resultado = "";
    for (var i = 0; i < mensaje.length; i++) {
        var charCode = mensaje.charCodeAt(i);
        if (charCode >= 65 && charCode <= 90) { // letras mayúsculas
            resultado += String.fromCharCode(((charCode - 65 + clave) % 26) + 65);
        } else if (charCode >= 97 && charCode <= 122) { // letras minúsculas
            resultado += String.fromCharCode(((charCode - 97 + clave) % 26) + 97);
        } else {
            resultado += mensaje.charAt(i); // conservar otros caracteres
        }
    }
    document.getElementById("resultado").value = resultado;
}

function desencriptar() {
    var mensaje = document.getElementById("mensaje").value;
    var clave = parseInt(document.getElementById("clave").value);
    var resultado = "";
    for (var i = 0; i < mensaje.length; i++) {
        var charCode = mensaje.charCodeAt(i);
        if (charCode >= 65 && charCode <= 90) { // letras mayúsculas
            resultado += String.fromCharCode(((charCode - 65 - clave + 26) % 26) + 65);
        } else if (charCode >= 97 && charCode <= 122) { // letras minúsculas
            resultado += String.fromCharCode(((charCode - 97 - clave + 26) % 26) + 97);
        } else {
            resultado += mensaje.charAt(i); // conservar otros caracteres
        }
    }
    document.getElementById("resultado").value = resultado;
}
