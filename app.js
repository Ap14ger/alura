// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

let nombres = [];

function agregarAmigo() {
    let input = document.getElementById("amigo");
    let nombre = input.value.trim();

    if (nombre === "") {
        alert("No puedes ingresar un nombre vacío.");
        return;
    }

    if (nombres.includes(nombre)) {
        alert("Este nombre ya está en la lista.");
        return;
    }

    nombres.push(nombre);
    actualizarLista();
    input.value = "";
}

function actualizarLista() {
    let lista = document.getElementById("listaAmigos");
    lista.innerHTML = "";

    nombres.forEach(nombre => {
        let li = document.createElement("li");
        li.textContent = nombre;
        lista.appendChild(li);
    });
}

function sortearAmigo() {
    if (nombres.length < 1) {
        alert("Debe haber al menos un participante.");
        return;
    }

    let index = Math.floor(Math.random() * nombres.length);
    let sorteado = nombres[index];

    mostrarResultado(sorteado);
}

function mostrarResultado(sorteado) {
    let listaResultados = document.getElementById("resultado");
    listaResultados.innerHTML = ""; // Borra resultados anteriores

    let li = document.createElement("li");
    li.textContent = `🎉 El amigo secreto es: ${sorteado} 🎉`;
    listaResultados.appendChild(li);
}

