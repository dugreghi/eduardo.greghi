const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Qual sua idade ?",
        alternativas: [
            {
                texto: "+18.",
                afirmacao: ""
            },
            {
                texto: "-18.",
                afirmacao: ""
            }
        ]
    },
    {
        enunciado: "Você pratica algum tipo de esporte ?",
        alternativas: [
            {
                texto: "Sim.",
                afirmacao: ""
            },
            {
                texto: "Não.",
                afirmacao: ""
            }
        ]
    },
    {
        enunciado: "Você prefere que tipos de esportes ?",
        alternativas: [
            {
                texto: "Esportes de invasão.",
                afirmacao: ""
            },
            {
                texto: "Esportes de rede e parede.",
                afirmacao: ""
            }
        ]
    },
    {
        enunciado: "Você costuma assistir algum tipo de esporte em sua televisão, celular, computadores, etc ?",
        alternativas: [
            {
                texto: "Sim, costumo assistir frequentemente.",
                afirmacao: ""
            },
            {
                texto: "Não, costumo praticar.",
                afirmacao: ""
            }
        ]
    },
    {
        enunciado: "Já participou de campeonatos ?",
        alternativas: [
            {
                texto: "Sim, já participei.",
                afirmacao: ""
            },
            {
                texto: "Não, não participei.",
                afirmacao: ""
            }
        ]
    },
];


let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
    if (atual >= perguntas.length) {
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada) {
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacoes + " ";
    atual++;
    mostraPergunta();
}

function mostraResultado() {
    caixaPerguntas.textContent = "Obrigado por responder, Tenha um Bom Dia !!!";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();