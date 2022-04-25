// Esta função faz com que a caixa de itens adicionados ao carrinho seja exibida/escondida quando o ícone do carrinho for clicado
function mostrarCaixa() {
    let caixaMensagem = document.getElementById("caixa-mensagem");
    if (caixaMensagem.style.display === "block") {
        caixaMensagem.style.display = "none";
    } else {
        caixaMensagem.style.display = "block";
    }
}



