// Datos de actividades por categoría
const actividades = {
    albanileria: [
        { nombre: "Cabado de Bases (suelo blando) - por m³", valor: 24000 },
        { nombre: "Armado y llenado de bases - por m³", valor: 32000 },
        { nombre: "Armado y llenado de columnas - por ml", valor: 23000 },
        { nombre: "Armado y llenado de vigas de arrastre - por ml", valor: 25000 },
        { nombre: "Armado y llenado de vigas aéreas - por ml", valor: 27000 },
        { nombre: "Pared ladrillón 12 x 30 - por m²", valor: 16000 },
        { nombre: "Pared de bloque 18 x 40 - por m²", valor: 18000 },
        { nombre: "Pared de ladrillo 12 x 26 - por m²", valor: 18500 },
        { nombre: "Pared adobón visto - por m²", valor: 24000 },
        { nombre: "Capa aisladora horizontal 18cm x 2cm - por ml", valor: 6000 },
        { nombre: "Reboque grueso x 2 cm - por m²", valor: 13000 },
        { nombre: "Reboque fino - por m²", valor: 5500 },
        { nombre: "Contrapiso x 5cm de espesor  - por m²", valor: 14000 },
        { nombre: "Contrapiso x 10cm de espesor - por m²", valor: 19000 },
        { nombre: "Colocación de cerámico - por m²", valor: 16000 },
        { nombre: "Colocación de porcelanato - por m²", valor: 22000 },
        { nombre: "Colocación de aberturas (sin mochetas) - por m²", valor: 22000 },
        { nombre: "Losa (Col. de viguetas, ladrillones y llenado) - por m²", valor: 41000 },
        { nombre: "Relleno (Tierra o similar-distancia 10 metros) - por m³", valor: 9000 },
        { nombre: "Carga de contenedor (Tierra o similar-distancia 10 metros) - por m³", valor: 9500 },
    ],
    plomeria: [
        { nombre: "Instalación de cañerías - por ml", valor: 15000 },
        { nombre: "Reparación de fugas - por hora", valor: 12000 },
        { nombre: "Colocacion de artefactos - por unidad", valor: 30000 },
    ],
    electricidad: [
        { nombre: "Instalación eléctrica básica - por ml", valor: 10000 },
        { nombre: "Instalación de tomacorrientes - por unidad", valor: 5000 },
        { nombre: "Busqueda y reparación de corto circuitos", valor: 38000 },
    ],
    soldadura: [
        { nombre: "Soldadura de estructuras metálicas - por ml", valor: 20000 },
        { nombre: "Estructura para techo de chapa - por m2", valor: 35000 },
    ],
    pintura: [
        { nombre: "Pintura de paredes - por m²", valor: 8000 },
        { nombre: "Pintura de techos - por m²", valor: 10000 },
    ],
    durlock: [
        { nombre: "Muro de Durlock - por m²", valor: 12500 },
        { nombre: "Cieloraso de Durlock - por m²", valor: 11000 },
    ],
    jardineria: [
        { nombre: "Corte de pasto - por m²", valor: 300 },
        
    ],
};

// Función para cargar actividades según la categoría seleccionada
function cargarActividades() {
    const categoria = document.getElementById("categoria").value;
    const selectActividad = document.getElementById("actividad");

    // Limpiar actividades anteriores
    selectActividad.innerHTML = '<option value="">-- Selecciona una actividad --</option>';

    if (categoria) {
        // Habilitar el select de actividades
        selectActividad.disabled = false;

        // Cargar las actividades de la categoría seleccionada
        actividades[categoria].forEach((actividad) => {
            const option = document.createElement("option");
            option.value = actividad.valor;
            option.textContent = actividad.nombre;
            selectActividad.appendChild(option);
        });
    } else {
        // Deshabilitar el select de actividades si no hay categoría seleccionada
        selectActividad.disabled = true;
    }
}

// Función para calcular el presupuesto
function calcularPresupuesto() {
    const actividad = document.getElementById("actividad").value;
    const cantidad = parseFloat(document.getElementById("cantidad").value);

    if (isNaN(cantidad) || cantidad < 0) {
        alert("Por favor, ingresa una cantidad válida.");
        return;
    }

    const total = actividad * cantidad;
    document.getElementById("total").textContent = `$${total.toLocaleString()}`;
}

// Alternar entre modo claro y oscuro
const toggleButton = document.getElementById("toggle-mode");
const body = document.body;

toggleButton.addEventListener("click", () => {
    body.classList.toggle("dark-mode");
    if (body.classList.contains("dark-mode")) {
        toggleButton.textContent = "☀️ Modo Claro";
    } else {
        toggleButton.textContent = "🌙 Modo Oscuro";
    }
});
