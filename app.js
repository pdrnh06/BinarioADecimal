function validar_binario(input) {
    if (/^[01]{1,36}$/.test(input)) {
        return true;
    }
    else false;
}

function pasar_a_decimal(input) {
    return parseInt(input, 2);
}

function mostrar_resultado(resultado) {
    let parrafo = document.getElementById("parrafo_resultado");
    parrafo.textContent = resultado;
}

function manejar_calculos() {

    let input = document.getElementById("input_binario").value;

    if (validar_binario(input)) {
        let resultado = pasar_a_decimal(input);
        mostrar_resultado(resultado);
    } else {
        mostrar_errores()
    }

}

function mostrar_errores(error) {
    alert("Por favor, introduzca un número binario (solo 0 y 1).");
}