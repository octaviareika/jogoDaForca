
function jogarSozinho(){

    var palavras = ["casa", "carro", 
                    "computador", "celular", 
                    "notebook", "teclado", 
                    "mouse", "monitor", 
                    "cadeira", "mesa", 
                    "ventilador", 
                    "arcondicionado", "televisao", 
                    "sofa", "cama", "armario", 
                    "geladeira", "fogao"];

    var indiceAleatorio = parseInt((Math.random() * palavras.length));
    console.log(indiceAleatorio);


}

module.exports = { jogarSozinho };

