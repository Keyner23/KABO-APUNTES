
const sumar1 = document.getElementById("sumar-1");
const sumar2 = document.getElementById("sumar-2");
const resultado1 = document.getElementById("result-1");
const resultado2 = document.getElementById("result-2");

const input1 = document.querySelectorAll(".team")[0].querySelector("input[type='number']:not(.result)");
const input2 = document.querySelectorAll(".team")[1].querySelector("input[type='number']:not(.result)");

function mostrarAlerta(equipo) {
    Swal.fire({
        title: `${equipo} llegó a 100 puntos!`,
        width: 600,
        padding: "3em",

        color: "#716add",
        background: "#fff url('https://sweetalert2.github.io/images/trees.png')",
        backdrop: `
        rgba(0,0,123,0.4)
        url("https://sweetalert2.github.io/images/nyan-cat.gif")
        left top
        no-repeat`
    }).then(() => {
        // Reiniciar valores después del alerta
        resultado1.value = 0;
        resultado2.value = 0;
        input1.value = "";
        input2.value = "";
    });
}

sumar1.addEventListener("click", () => {
    const valorActual = parseInt(resultado1.value) || 0;
    const nuevoValor = parseInt(input1.value) || 0;
    const total = valorActual + nuevoValor;
    resultado1.value = total;
    input1.value = "";

    if (total >= 100) {
        mostrarAlerta("¡Equipo 1!");
    }
});

sumar2.addEventListener("click", () => {
    const valorActual = parseInt(resultado2.value) || 0;
    const nuevoValor = parseInt(input2.value) || 0;
    const total = valorActual + nuevoValor;
    resultado2.value = total;
    input2.value = "";

    if (total >= 100) {
        mostrarAlerta("¡Equipo 2!");
    }
});
