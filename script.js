function calcular() {

    const codigo = parseInt(document.getElementById('codigo').value);
    const quantidade = parseInt(document.getElementById('quantidade').value);
    let preco = 0;

    switch (codigo) {
        case 1:
            preco = 5.00;
            break;
        case 2:
            preco = 3.50;
            break;
        case 3:
            preco = 4.80;
            break;
        case 4:
            preco = 8.90;
            break;
        case 5:
            preco = 7.32;
            break;
        default:
            document.getElementById('resultado').innerHTML = "Código inválido. Insira um valor entre 1 e 5.";
            return; 
    }

    const total = preco * quantidade;

    
    document.getElementById('resultado').innerHTML = `Valor a pagar: R$ ${total.toFixed(2)}`;
}