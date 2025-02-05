document.getElementById('numero').value = '';
function verificadorDeNumeroPalindro() {
    var numero = document.getElementById('numero').value;
        var numeroPalindro = numero.split("");
        console.log(numeroPalindro);
        var numeroInvertido = numeroPalindro.reverse();
        console.log(numeroInvertido);
        numeroInvertido = numeroInvertido.join("");
        console.log(numeroInvertido);
        var exibir = document.getElementById('exibir');

        if (numero == numeroInvertido) {
        let tira = document.querySelector('h1')
        tira.innerHTML = ''
            exibir.innerHTML = `O numero ${numero} é um palindro.`;
            console.log(1);
        } else {
            exibir.innerHTML = `O numero ${numero} não é um palindro.`;
            console.log(2);
        };
    

    document.getElementById('numero').value = '';
}

function reiniciar() {
    document.getElementById('numero').value = '';
    document.getElementById('exibir').innerHTML = '';
    document.querySelector('h1').textContent = 'Digite um numero, que eu falarei se é um palindro ou não.'

}