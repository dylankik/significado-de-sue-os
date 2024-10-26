const diccionarioSuenos = {
    "Soñe que me cai": "Soñar que te caes simboliza que estas perdiendo el control"
    "caer": "Caer en un sueño puede simbolizar la pérdida de control.",
    "volar": "Soñar que vuelas a menudo representa libertad y poder.",
    "agua": "El agua puede simbolizar emociones y el subconsciente.",
    "fuego": "El fuego puede representar pasión o ira.",
};

// Sinónimos
const sinónimos = {
    "caer": ["caer", "desplomarse", "caída"],
    "volar": ["volar", "elevarse", "flotar"],
    "agua": ["agua", "líquido", "fluido"],
    "fuego": ["fuego", "llama", "incendio"],
};

function buscarSignificado(sueno) {
    // Buscar en el diccionario usando sinónimos
    for (const clave in sinónimos) {
        if (sinónimos[clave].includes(sueno.toLowerCase())) {
            return diccionarioSuenos[clave];
        }
    }
    
    return "Lo sentimos, no se encontró el significado de ese sueño.";
}
