let Napolion = {name: "Napolion"};
let Josefina = {name: "Josefina"};
class Juego {
  constructor(preguntas) {
    this.preguntas = preguntas;
    this.currentQuestion = 0;
    this.gameContainer = document.getElementById("game");
    this.startGame();
  }

  startGame() {
    const pregunta = this.preguntas[this.currentQuestion].enunciado;
    const opciones = this.preguntas[this.currentQuestion].respuestas;

    this.gameContainer.innerHTML = `
      <div class="question">${pregunta}</div>
      <div class="options">
        ${opciones.map((opcion, index) => `<button onclick="juego.checkAnswer(${index})">${opcion}</button>`).join("")}
      </div>
    `;
  }

  checkAnswer(selectedOption) {
    if (selectedOption === this.preguntas[this.currentQuestion].respuestaCorrecta) {
      alert("¡Respuesta correcta!");
      this.currentQuestion++;
      if (this.currentQuestion < this.preguntas.length) {
        this.startGame();
      } else {
        alert("Napoleon y Josefina sobrevivieron.");
        this.resetGame();
      }
    } else {
      alert("¡Respuesta incorrecta! El Garbage Collector ha eliminado a Napoleón Y Josefina.");
      this.resetGame();
    }
  }

  resetGame() {
    this.currentQuestion = 0;
    this.startGame();
  }
}

const preguntas = [
  {
    enunciado: "¿Qué sucedió después de que Napoleón y Josefina escapara de Santa Elena?",
    respuestas: ["Se retiró a una vida de paz y reflexión.", "Continuó liderando un movimiento secreto para restaurar su imperio.", "Se convirtió en un comerciante ambulante viajando por el mundo."],
    respuestaCorrecta: 2,
  },
  {
    enunciado: "¿Cómo reaccionaron los seguidores de Napoleón y Josefina ante su escape?",
    respuestas: ["Organizaron una resistencia activa para protegerlo.", "Decidieron seguir adelante sin él, creyendo que su tiempo ya había pasado.", "Negaron la veracidad de su escape, considerándolo una estrategia de distracción."],
    respuestaCorrecta: 1,
  },
  {
    enunciado: "¿Cómo se difundieron los rumores sobre la supervivencia de Napoleón y Josefina?",
    respuestas: ["A través de informantes leales que mantenían viva la leyenda.", "Por medio de un diario secreto que Napoleón dejó atrás.", "Mediante mensajes codificados transmitidos por sus seguidores."],
    respuestaCorrecta: 1,
  },
  {
    enunciado: "¿Cuál fue el nuevo nombre y la identidad secreta que adoptó Napoleón?",
    respuestas: ["Pierre Leclerc, un simple agricultor.", "Marcel Dubois, un estudioso retirado.", "Louis Blanc, un comerciante de antigüedades."],
    respuestaCorrecta: 2,
  },
  {
    enunciado: "¿Quieres que muera Napoleón y Josefina?",
    respuestas: ["Si", "No", "Si por que es un perdedor"],
    respuestaCorrecta: 1,
  }
];


delete Napolion;
delete Josefina;
delete preguntas;

const juego = new Juego(preguntas);

