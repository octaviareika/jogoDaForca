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
    palavra = retornaPalavra();

    var palavraComUnderline = "" ;
 
    for (let i = 0; i < palavra.length; i++){
     //process.stdout.write("_ ");
        palavraComUnderline += "_";
     }
 
     return palavraComUnderline;
}

function mostraSituacao(palavraComUnderline, palavra, tentativas, maximoDeTentativas){
    console.log("Palavra:" + palavraComUnderline);
    process.stdout.write("Tamanho: " + palavra.length);
    console.log("\nTentativas: " + tentativas);
    console.log("Máximo de tentativas: " + maximoDeTentativas);
}

function jogarSozinho(){
    var palavra = retornaPalavra();
    var palavraComUnderline = palavraUnderline(palavra);

    let tentativas = 0;
    const maximoDeTentativas = 6;

    let letra = "";

    while (tentativas <= maximoDeTentativas){
        console.clear(); // limpa a tela 
        
        mostraSituacao(palavraComUnderline, palavra, tentativas, maximoDeTentativas);

        console.log("Digite uma letra: ");
        const prompt = require("prompt-sync")(); // instanciar o prompt-sync
        letra = prompt(); // lendo a letra
        tentativas++;

        for(let i =0; i < palavra.length; i++){
            if (palavra[i] ===  letra ){
                palavraComUnderline = palavraComUnderline.substring(0, i) + letra + palavraComUnderline.substring(i + 1);
            }
        }
        
    }

   
}

module.exports = { jogarSozinho };

