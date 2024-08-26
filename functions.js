function saludar(nombre) {
    if (nombre === void 0) { nombre = 'nombrepordefecto'; }
    console.log("Hola, ".concat(nombre, "!"));
}
function generarNumeroAleatorio() {
    var numero = Math.floor(Math.random() * 101);
    console.log("El n\u00FAmero aleatorio es: ".concat(numero));
}
function imprimirPosicion(position) {
    console.log("Latitud: ".concat(position.lat, ", Longitud: ").concat(position.long));
}
saludar("job");
saludar();
generarNumeroAleatorio();
imprimirPosicion({ lat: 3, long: 3 });
