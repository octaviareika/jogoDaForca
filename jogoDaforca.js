const menuDoJogo = require('./index.js');

function retornaPalavra(){
    const palavras = ["casa", "carro", 
    "computador", "celular", 
    "notebook", "teclado", 
    "mouse", "monitor", 
    "cadeira", "mesa", 
    "ventilador", 
    "arcondicionado", "televisao", 
    "sofa", "cama", "armario", 
    "geladeira", "fogao"];

    var indiceAleatorio = Math.floor(Math.random() * palavras.length);
    var palavra = palavras[indiceAleatorio];

    return palavra;

}


function palavraUnderline(palavra){

    var palavraComUnderline = "" ;
 
    for (let i = 0; i < palavra.length; i++){
     //process.stdout.write("_ ");
        palavraComUnderline += "_";
     }

 
     return palavraComUnderline;
}

function mostraSituacao(palavraComUnderline, palavra, tentativas, maximoDeTentativas, letrasQueJaForamDigitadas ){
    console.log("Palavra:" + palavraComUnderline);
    process.stdout.write("Tamanho: " + palavra.length);
    console.log("\nTentativas: " + tentativas);
    console.log("Máximo de tentativas: " + maximoDeTentativas);
    console.log("Letras que já foram digitadas: " + letrasQueJaForamDigitadas );
}

function jogarSozinho(){
    var palavra = retornaPalavra();
    var palavraComUnderline = palavraUnderline(palavra);

    let tentativas = 0;
    const maximoDeTentativas = 4;

    let letra = "";
    let letrasQueJaForamDigitadas = "";
    let letraEstaNaPalavra = false;

    while (palavraComUnderline != palavra && tentativas <= maximoDeTentativas){
        
        mostraSituacao(palavraComUnderline, palavra, tentativas, maximoDeTentativas, letrasQueJaForamDigitadas);

        console.log("Digite uma letra: ");
        const prompt = require("prompt-sync")(); // instanciar o prompt-sync
        letra = prompt(); // lendo a letra

        if (letra.length !== 1 || !isNaN(letra)) {
            process.stdout.write("Por favor, digite apenas uma única letra.");
            continue;
        }

        // verificar se a letra digitada está na palavra
        for(let i =0; i < palavra.length; i++){
            if (palavra[i] ===  letra ){
                palavraComUnderline = palavraComUnderline.substring(0, i) + letra + palavraComUnderline.substring(i + 1);
                letraEstaNaPalavra = true;
                //console.clear();
            }
        }
        
        // verificar se a letra digitada já foi digitada antes
        if (letrasQueJaForamDigitadas.indexOf(letra) === -1){
            tentativas++;
            letrasQueJaForamDigitadas += letra + " ";
            //console.clear();
        }
        else {
            console.log("Você já digitou essa letra antes!");
            continue;
        }

        if (!letraEstaNaPalavra){
            tentativas++;
        }

        console.clear();
        
    }

    if (palavraComUnderline === palavra){
        console.log("Parabéns, você ganhou!");
    
    }
    else {
        console.log("Você perdeu!");
        console.log("A palavra era: " + palavra);
    }

    console.log("Digite 1 para voltar ao menu ou qualquer outra tecla para sair: ");
    const prompt = require("prompt-sync")(); // instanciar o prompt-sync
    let opcao = prompt(); // lendo a letra

    if (opcao === "1"){
        console.clear();
        menuDoJogo();

    }
    else {
        console.log("Saindo...");
    }
   
}

module.exports = { jogarSozinho };
