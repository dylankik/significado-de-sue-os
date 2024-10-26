const diccionarioSuenos = {
    "caer": "Caer en un sueño puede simbolizar la pérdida de control.",
    "volar": "Soñar que vuelas a menudo representa libertad y poder.",
    // Agrega más sueños y sus significados aquí
};
function buscarSignificado(sueno) {
    const resultado = diccionarioSuenos[sueno.toLowerCase()];
    if (resultado) {
        return resultado;
    } else {
        return "Lo sentimos, no se encontró el significado de ese sueño.";
    }
}
document.getElementById("buscarBtn").addEventListener("click", function() {
    const suenoInput = document.getElementById("suenosInput").value;
    const resultado = buscarSignificado(suenoInput);
    document.getElementById("resultado").innerText = resultado;
});
