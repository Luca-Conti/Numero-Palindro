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


function verificadorDeNumeroPalindroIT() {
    var numero = document.getElementById('numero').value;
    var numeroPalindro = numero.split("");
    console.log(numeroPalindro);
    var numeroInvertido = numeroPalindro.reverse();
    console.log(numeroInvertido);
    numeroInvertido = numeroInvertido.join("");
    console.log(numeroInvertido);
    var exibir = document.getElementById('exibir2');

    if (numero == numeroInvertido) {
    let tira = document.querySelector('h1')
    tira.innerHTML = ''
        exibir.innerHTML = `Il numero ${numero} è un palindro.`;
        console.log(1);
    } else {
        exibir.innerHTML = `Il numero ${numero} non è un palindro.`;
        console.log(2);
    };
}


function verificadorDeNumeroPalindroen() {
    var numero = document.getElementById('numero').value;
    var numeroPalindro = numero.split("");
    console.log(numeroPalindro);
    var numeroInvertido = numeroPalindro.reverse();
    console.log(numeroInvertido);
    numeroInvertido = numeroInvertido.join("");
    console.log(numeroInvertido);
    var exibir = document.getElementById('exibir2');

    if (numero == numeroInvertido) {
    let tira = document.querySelector('h1')
    tira.innerHTML = ''
        exibir.innerHTML = `The number ${number} is a palinder.`;
        console.log(1);
    } else {
        exibir.innerHTML = `The number ${number} is not a palinder.`;
        console.log(2);
    };
    };

function reiniciar() {
    document.getElementById('numero').value = '';
    document.getElementById('exibir').innerHTML = '';
    document.querySelector('h1').textContent = 'Digite um numero, que eu falarei se é um palindro ou não.'

}

function reiniciaren() {
    document.getElementById('numero').value = '';
    document.getElementById('exibir').innerHTML = '';
    document.querySelector('h1').textContent = `Enter a number, and I'll tell you whether it's a palindro or not.`

}

function reiniciarit() {
    document.getElementById('numero').value = '';
    document.getElementById('exibir').innerHTML = '';
    document.querySelector('h1').textContent = `Comporre un numero, che indichi se si tratta di un palindro o meno.`
}