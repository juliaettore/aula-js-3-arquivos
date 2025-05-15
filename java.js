/*declarando variáveis*/
let altura;
let peso;
let imc;


function calc_imc(){
    let altura = (document.getElementById("al").value)/100;

    let peso = document.getElementById("ps").value;

    altura = parseFloat(altura);

    peso = parseFloat(peso);

    let imc = peso / (altura * altura);
    window.alert("Seu IMC é: " + imc);
}