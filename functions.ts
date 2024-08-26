function saludar(nombre: string ='nombrepordefecto'): void {
    console.log(`Hola, ${nombre}!`);
}


function generarNumeroAleatorio(): void {
    const numero = Math.floor(Math.random() * 101);
    console.log(`El número aleatorio es: ${numero}`);
}

function imprimirPosicion(position: { lat: number; long: number }): void {
    console.log(`Latitud: ${position.lat}, Longitud: ${position.long}`);
}

saludar("job");
saludar();
generarNumeroAleatorio();
imprimirPosicion({lat:3,long:3});