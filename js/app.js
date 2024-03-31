function comprar() {

    tipoIngresso = document.getElementById('tipo-ingresso');
    quantidade = parseInt(document.getElementById('qtd').value);

    if (tipoIngresso.value == 'pista') {
        comprarPista(quantidade)
    } else if (tipoIngresso.value == 'inferior') {
        comprarInferior(quantidade)
    } else if (tipoIngresso.value == 'superior') {
        comprarSuperior(quantidade)
    }


}

function comprarPista(quantidade) {

    let quantidadePista = parseInt(document.getElementById('qtd-pista').textContent);
    if (quantidade > quantidadePista) {
        alert('Quantidade indisponível!');
    } else {
        alert('Compra Efetuada com sucesso!');
        quantidadePista = quantidadePista - quantidade;
        document.getElementById('qtd-pista').textContent = quantidadePista;
    }

}
function comprarInferior(quantidade) {
    let quantidadeInferior = parseInt(document.getElementById('qtd-inferior').textContent);
    if (quantidade > quantidadeInferior) {
        alert('Quantidade indisponível!');
    } else {
        quantidadeInferior = quantidadeInferior - quantidade;
        document.getElementById('qtd-inferior').textContent = quantidadeInferior;
        alert('Compra Efetuada com sucesso!');
    }
}

function comprarSuperior(quantidade){
    let quantidadeSuperior = parseInt(document.getElementById('qtd-superior').textContent);
    if (quantidade > quantidadeSuperior) {
        alert('Quantidade indisponível!');
    } else {
        quantidadeSuperior = quantidadeSuperior - quantidade;
        document.getElementById('qtd-superior').textContent = quantidadeSuperior;
        alert('Compra Efetuada com sucesso!');
    }
}

