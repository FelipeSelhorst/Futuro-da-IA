const mainBox = document.querySelector(".main-box");
const qBox = document.querySelector(".Q-box");
const aBox = document.querySelector(".A-box");
const rBox = document.querySelector(".R-box");
const rText = document.querySelector(".R-text");

const Perguntas = [
  {
    enunciado: "No futuro, a IA poderá compreender emoções humanas com precisão e reagir de forma empática em tempo real.",
    alternativas: [
      { texto: "Verdadeiro", afirmacao: "Você escolheu Verdadeiro!" },
      { texto: "Falso", afirmacao: "Você escolheu Falso!" }
    ]
  },
  {
    enunciado: "O desenvolvimento de IA responsável e regulamentada será essencial para garantir que seus avanços beneficiem a sociedade de forma ética e segura.",
    alternativas: [
      { texto: "Verdadeiro", afirmacao: "Você escolheu Verdadeiro!" },
      { texto: "Falso", afirmacao: "Você escolheu Falso!" }
    ]
  },
  {
    enunciado: "Pergunta 3A automação impulsionada por IA eliminará completamente a necessidade de trabalhadores humanos em todos os setores.",
    alternativas: [
      { texto: "Verdadeiro", afirmacao: "Você escolheu Verdadeiro!" },
      { texto: "Falso", afirmacao: "Você escolheu Falso!" }
    ]
  },
];

let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
  if (atual >= Perguntas.length) {
    mostraResposta();
    return;
  }
  perguntaAtual = Perguntas[atual];
  qBox.textContent = perguntaAtual.enunciado;
  aBox.innerHTML = "";
  mostraAlternativas();
}

function mostraAlternativas() {
  for (const alternativa of perguntaAtual.alternativas) {
    const botaoAlternativa = document.createElement("button");
    botaoAlternativa.textContent = alternativa.texto;
    botaoAlternativa.addEventListener("click", () => respostaSelecionada(alternativa));
    aBox.appendChild(botaoAlternativa);
  }
}

function respostaSelecionada(opcaoSelecionada) {
  historiaFinal = opcaoSelecionada.afirmacao;
  atual++;
  mostraPergunta();
}

function mostraResposta() {
  qBox.textContent = "Resultado Final";
  rText.textContent = historiaFinal;
  aBox.innerHTML = "";
}

mostraPergunta();