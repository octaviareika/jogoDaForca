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

    let indiceAleatorio = parseInt((Math.random() * palavras.length));
    var palavra = palavras[indiceAleatorio];

    return palavra;

}


function palavraUnderline(palavra){
    palavra = retornaPalavra();

    var palavraComUnderline = "" ;
 
    for (let i = 0; i < palavra.length; i++){
     //process.stdout.write("_ ");
        palavraComUnderline += "_" + " ";
     }
     console.log(palavraComUnderline);
 
     return palavraComUnderline;
}

function jogarSozinho(){
    var palavra = retornaPalavra();
    palavraUnderline(palavra);

    let tentativas = 0;
    const maximoDeTentativas = 6;

    let letra = "";

    while (tentativas < maximoDeTentativas){
        console.log("Digite uma letra: ");
        const prompt = require("prompt-sync")(); // instanciar o prompt-sync
        letra = prompt();
        tentativas++;
    }

   
}

module.exports = { jogarSozinho };

