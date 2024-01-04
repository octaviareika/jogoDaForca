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
                console.log("Jogar");
                jogarSozinho();

                break;
            case "2":
                console.log("Sobre");
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