// criar um jogo da forca

menuDoJogo();


function menuDoJogo(){
    let opcao = 0;

    while (opcao < 1 || opcao > 3){
        console.log("Bem vindo ao jogo da forca!\n");
        console.log("Escolha uma opção:\n");
        console.log("1 - Jogar\n");
        console.log("2 - Sobre\n");
        console.log("3 - Sair\n");
        const prompt = require("prompt-sync")(); // instancar o prompt-sync
        opcao = prompt();
        switch (opcao) {
            case "1":
                jogarSozinho();

                break;
            case "2":
                console.log("Sobre: ");
                process.stdout.write("O jogo da forca é um jogo em que o jogador tem que acertar qual é a palavra proposta, tendo como dica o número de letras e o tema relacionado.\n");
                process.stdout.write("A cada letra errada, o seu número de tentativas aumenta e caso chegue ao limite de tentativas, o jogador perde.\n");
                process.stdout.write("O jogo possui um banco de palavras que é escolhida aleatoriamente.\n");
                process.stdout.write("Bom jogo!\n");    
                break;
            case "3":
                console.log("GoodBye!");
                break;
            default:
                console.log("Opção inválida");
                break;
        }
    }
}


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

function mostraSituacao(palavraComUnderline, palavra, tentativas, maximoDeTentativas, letrasQueJaForamDigitadas,mensagem ){
    console.log("Mensagem: " + mensagem);
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
    const maximoDeTentativas = 12;

    let letra = "";
    let letrasQueJaForamDigitadas = "";
    let letraEstaNaPalavra = false;
    let mensagem = "";
    

    while (palavraComUnderline != palavra && tentativas <= maximoDeTentativas){

        console.clear();
        
        mostraSituacao(palavraComUnderline, palavra, tentativas, maximoDeTentativas, letrasQueJaForamDigitadas, mensagem);

        console.log("Digite uma letra ou  digite '1' para arriscar a palavra: ");
        const prompt = require("prompt-sync")(); // instanciar o prompt-sync
        letra = prompt(); // lendo a letra

        if (letra === "1"){
            console.log("Digite a palavra: ");
            const prompt = require("prompt-sync")(); // instanciar o prompt-sync
            let palavraDigitada = prompt(); // lendo a letra

            if (palavraDigitada === palavra){
                console.log("Parabéns, você ganhou!");
                break;
            }
            else {
                //console.log("Você perdeu!");
                break;
            }
        }

        if (letra.length !== 1 || !isNaN(letra)) {
            process.stdout.write("Por favor, digite apenas uma única letra.");
            continue;
        }

        // verificar se a letra digitada está na palavra
        for(let i =0; i < palavra.length; i++){
            if (palavra[i] ===  letra ){
                mensagem = "";
                palavraComUnderline = palavraComUnderline.substring(0, i) + letra + palavraComUnderline.substring(i + 1);
                letraEstaNaPalavra = true;
                mensagem = ""
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
            mensagem = "Você já digitou essa letra antes.";
            continue;
        }

        if (!letraEstaNaPalavra){
            mensagem = "";
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

//module.exports = { jogarSozinho };