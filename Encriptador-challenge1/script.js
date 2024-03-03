function encriptar() {
    var textoOriginal = document.getElementById("texto").value.toLowerCase();
    var textoEncriptado = textoOriginal
        .replace(/e/g, "enter")
        .replace(/i/g, "imes")
        .replace(/a/g, "ai")
        .replace(/o/g, "ober")
        .replace(/u/g, "ufat");
    document.getElementById("resultado").value = textoEncriptado;
}

function desencriptar() {
    var textoEncriptado = document.getElementById("texto").value.toLowerCase();
    var textoDesencriptado = textoEncriptado
        .replace(/enter/g, "e")
        .replace(/imes/g, "i")
        .replace(/ai/g, "a")
        .replace(/ober/g, "o")
        .replace(/ufat/g, "u");
    document.getElementById("resultado").value = textoDesencriptado;
}

function copiarResultado() {
    var resultado = document.getElementById("resultado");
    resultado.select();
    document.execCommand("copy");
    alert("Texto copiado al portapapeles: " + resultado.value);
}
