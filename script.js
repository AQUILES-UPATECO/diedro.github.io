function calcularPresupuesto() {
    // Obtener los valores seleccionados
    const actividad = document.getElementById("actividad").value;
    const cantidad = document.getElementById("cantidad").value;

    // Calcular el total
    const total = actividad * cantidad;

    // Mostrar el resultado
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