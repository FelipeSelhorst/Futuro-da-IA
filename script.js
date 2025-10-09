const mainBox = document.querySelector(".main-box");
const qBox = document.querySelector(".Q-box");
const aBox = document.querySelector(".A-box");
const rBox = document.querySelector(".R-box");
const rText = document.querySelector(".R-text");

const lista = [item1, item2]

const Perguntas = [
  {
    enunciado: "Pergunta 1",
    alternativas: [
      "Alternativa 1",
      "Alternativa 2"
    ]
  },
  {
    enunciado: "Pergunta 2",
    alternativas: [
      "Alternativa 1",
      "Alternativa 2"
    ]
  },
  {
    enunciado: "Pergunta 3",
    alternativas: [
      "Alternativa 1",
      "Alternativa 2"
    ]
  },
]

let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
  if (atual >= perguntas[atual]) {
    mostraResultado();
    return;
  }
  perguntaAtual = Perguntas[atual];
  caixaPerguntas.textContent = perguntaAtual.enunciado;
  mostraAlternativas();
}

function mostraAlternativas() {
  for (const alternativa of perguntaAtual.alternativas) {
    const botaoAlternativas = document.createElement("button");
    botaoAlternativas.textContent = alternativas;
    botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
    caixaAlternativas.appendChild(botaoAlternativas);
  }
}

function respostaSelecionada(opcaoSelecionada) {
  const afirmacoes = opcaoSelecionada.afirmacoes;
  historiaFinal = afirmacoes;
  atual++;
  mostraPergunta();
}

function mostraResposta() {
  caixaPerguntas.textContent = "conteudo";
  textoResultado.textContent = historiaFinal;
  caixaAlternativas.textContent = "";
}

mostraPergunta();