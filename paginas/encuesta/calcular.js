function calcularResultado() {
    let puntaje = 0;
    const preguntas = ["q1", "q2", "q3", "q4", "q5"];
    let incompletas = false;  // Para verificar si hay preguntas sin responder

    preguntas.forEach(pregunta => {
        const seleccion = document.querySelector(`input[name="${pregunta}"]:checked`);
        if (seleccion) {
            puntaje += parseInt(seleccion.value, 10);
        } else {
            incompletas = true;  // Marca si hay preguntas sin responder
        }
    });

    if (incompletas) {
        alert("Por favor, responde todas las preguntas antes de enviar.");
        return; // Sale de la función sin calcular el puntaje
    }

    let mensaje = "";
    if (puntaje >= 8) {
        mensaje = "¡Eres una persona extremadamente honesta! Siempre haces lo correcto.";
    } else if (puntaje >= 5) {
        mensaje = "Tienes una buena moral, aunque a veces dudas. ¡Sigue esforzándote!";
    } else {
        mensaje = "Mmm... tal vez sea momento de reflexionar sobre tu honestidad.";
    }

    document.getElementById("resultado").innerHTML = `<h3>Tu puntaje: ${puntaje}/10</h3><p>${mensaje}</p>`;
}
