// criar um jogo da forca
const { jogarSozinho } = require("./jogoDaforca.js");

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
                console.log("Sair");
                break;
            default:
                console.log("Opção inválida");
                break;
        }
    }
}

module.exports = { menuDoJogo };