let dataElement = document.getElementById("data");

let storedData = localStorage.getItem("userInput");

if (storedData) {
    dataElement.textContent = storedData;
} else {
    dataElement.textContent = "No hay datos almacenados.";
}
