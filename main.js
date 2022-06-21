const mostrarEscolhaComputador = document.getElementById("escolhaComputador");
const mostrarescolhaJogador = document.getElementById("escolhaJogador");
const mostrarResultado = document.getElementById("mostrarResultado");
const possiveisescolhas = document.querySelectorAll("button");

let escolhaDoUsario;
let escolhaComputador;
let Resultado;


possiveisescolhas.forEach(escolha =>escolha.addEventListener("click",(event)=> {
    escolhaDoUsario= event.target.id;
mostrarescolhaJogador.innerHTML = escolhaDoUsario

gererescolhadocomputador();
gerarresultado();

}));
function gererescolhadocomputador(){

    const randomnumber= Math.floor(Math.random() * possiveisescolhas.length);
if (randomnumber === 0) {
escolhaComputador = "pedra";
}
if (randomnumber === 1) {
    escolhaComputador = "papel";
    }
    if (randomnumber === 2) {
        escolhaComputador = "tesoura";
        }

    console.log(escolhaComputador);
mostrarEscolhaComputador.innerHTML = escolhaComputador;

}
function gerarresultado (){

if (escolhaComputador===escolhaDoUsario){
Resultado = "Empate";
}

else if (       
    escolhaComputador === "pedra" && escolhaDoUsario === "papel" ||
    escolhaComputador === "papel" && escolhaDoUsario === "tesoura" ||
    escolhaComputador === "tesoura" && escolhaDoUsario === "pedra" 
) {
Resultado ="Você ganhou";
}
else {
Resultado = "Você perdeu";


}
mostrarResultado.innerHTML = Resultado;
} 

