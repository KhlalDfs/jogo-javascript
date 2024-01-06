//let titulo = document.querySelector("h1");
//titulo.innerHTML = "Jogo";

//let paragrafo = document.querySelector("p");
//paragrafo.innerHTML = "Escolha um numero 1 e 10";
let listaNumeros = [];
let limite = 10;
let numero = numeroAleatorio();
let tentativa = 1;

function exibir(tag, texto){
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
    responsiveVoice.speak(texto, "Brazilian Portuguese Female", {rate:1.2});
}
function mensaagemInicial(){
    exibir("h1", "Jogo");
    exibir("p", "Escolha entre 1 e " + limite);
}
mensaagemInicial();
function verificarChute(){
    let chute = document.querySelector("input").value;
    if (chute == numero){
        exibir("h1", "Correto");
        let palavraTentativa = tentativa > 1 ? " tentativas" : " tentativa";
        let mensagemTentativa = "Voce acertou com " + tentativa + palavraTentativa;
        exibir("p", mensagemTentativa);
        document.getElementById("reiniciar").removeAttribute("disabled");
    }else {
        if(chute > numero){
            exibir("p", "O numero é menor");
        }else {
            exibir("p", "O numero é maior");
        } 
        tentativa++;
        limparCampo();
    }
}

function numeroAleatorio(){
    let numeroEscolhido = parseInt(Math.random() * limite + 1);
    let qtdNumerosLista = listaNumeros.length;

    if(qtdNumerosLista == limite){
        listaNumeros = [];
    }

    if(listaNumeros.includes(numeroEscolhido)){
        return numeroAleatorio();
    }else {
        listaNumeros.push(numeroEscolhido);
        return numeroEscolhido;
    }
}
function limparCampo(){
    chute = document.querySelector("input");
    chute.value = " ";
}
function reiniciarJogo(){
    numero = numeroAleatorio();
    limparCampo();
    tentativa = 1;
    mensaagemInicial();
    document.getElementById("reiniciar").setAttribute("disabled", true);
}
