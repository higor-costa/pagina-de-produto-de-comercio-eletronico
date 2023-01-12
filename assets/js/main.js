// Esta função faz com que a caixa de itens adicionados ao carrinho seja exibida/escondida e feche o menu mobile, caso ele esteja aberto, quando o ícone do carrinho for clicado
const caixaMensagem = document.getElementById("caixa-mensagem");
const menuMobile = document.querySelector(".cabecalho__menu");
function controleCaixaMensagem() {

  caixaMensagem.classList.toggle("ativado");

  if(menuMobile.classList.contains("ativado"))
    menuMobile.classList.remove('ativado');
}

const iconeCarrinho = document.querySelector(".carrinho");
iconeCarrinho.addEventListener("click", controleCaixaMensagem)

// Função para abrir/fechar o menu mobile. Caso a caixa de mensagem do carrinho esteja aberta, ela será fechada.
function controlaMenu() {
  // abre o menu e fecha caixa de mensagem
  if(this.dataset.controleMenu === 'abre menu') {
    menuMobile.classList.add('ativado');
    caixaMensagem.classList.remove('ativado');
  }
  // fecha o menu
  else {
    menuMobile.classList.remove('ativado');
  }
}

const botoesAbrirFechar = document.querySelectorAll('[data-controle-menu]'); // Menu Hamburguer e o 'X'
botoesAbrirFechar.forEach(botao => {
  const eventos = ['touchstart', 'click'];
  eventos.forEach(evento => {
    botao.addEventListener(evento, controlaMenu)
  })
})

// Funções responsáveis por mostrar no slide a imagem relacionada à thumbnail
function thumbAtual(index) {
  mostrarThumbs(slideIndex = index);
}

const thumbs = document.querySelectorAll(".thumb");
thumbs.forEach((thumb, index) => {
  thumb.addEventListener('click', () => {
    thumbAtual(index + 1); // a thumb que for clicada invocará a função passando como argumento o seu index incrementado
  })
})

let slideIndex = 1;
mostrarThumbs(slideIndex); // Mostra a primeira thumbnail assim que a página é carregada

function mostrarThumbs(slideIndex) {
  const imagens = document.querySelectorAll(".imagem");

  imagens.forEach(imagem => {
    imagem.style.display = 'none';
  })

  thumbs.forEach(thumb => {
    thumb.className = thumb.className.replace(' active', '');
  })

  // slideIndex é decrementada, impossibilitando um index inválido
  imagens[slideIndex-1].style.display = "block";
  thumbs[slideIndex-1].className += " active";
}

// Função para abrir e fechar o modal
function controleLightbox(event) {
  const elementoClicado = event.target;
  // se o elemento clicado for uma das imagens do slide, o modal será aberto
  if(elementoClicado.classList.contains('imagem'))
    document.getElementById("myModal").style.display = "block";
  // se o elemento clicado for o icone "X" dentro do modal, então ele será fechado
  else if(elementoClicado.classList.contains('close'))
    document.getElementById("myModal").style.display = "none";
}
window.addEventListener('click', controleLightbox);

// função para navegar pelo slide através dos botões anterior/proximo 
function navegacaoSlide(BotaoIndex) {
  mostraSlides(slidesIndex += BotaoIndex);
}

const botaoAnterior = document.querySelector('.prev');
const botaoProximo = document.querySelector('.next');
const arrayBotoes = [botaoAnterior, botaoProximo];
arrayBotoes.forEach((botao, index) => {
  botao.addEventListener('click', () => {
    if(index === 0) {
      navegacaoSlide(-1); // caso o botão anterior seja clicado, o index -1 será passado como argumento
    }
    else {
      navegacaoSlide(index); // caso o botão proximo seja clicado, o index 1 será passado como argumento
    }
  })
})

// Função para navegar pelo slide através das thumbs
function slideAtual(index) {
  mostraSlides(slidesIndex = index);
}

const thumbsModal = document.querySelectorAll('.demo');
thumbsModal.forEach((thumb, index) => {
  thumb.addEventListener('click', () => {
    slideAtual(index + 1);
  })
})

let slidesIndex = 1;
mostraSlides(slidesIndex);

function mostraSlides(index) {
  const slidesModal = document.querySelectorAll('.mySlides');

  slidesModal.forEach(slide => {
    slide.style.display = 'none';
  })

  thumbsModal.forEach(thumb => {
    thumb.className = thumb.className.replace(' ativo', '');
  })

  if (index > slidesModal.length) {slidesIndex = 1}
  if (index < 1) {slidesIndex = slidesModal.length}
  
  slidesModal[slidesIndex-1].style.display = 'block';
  thumbsModal[slidesIndex-1].className += ' ativo';
}

// Função para adicionar e remover itens do carrinho
let contador = 0;
function adicionaRemoveItem(event) {
  let quantidade = document.querySelector(".botoes__quantidade-itens");
  const botao = event.target;
  if(botao.dataset.botao === 'mais') {
    contador++;
    quantidade.innerText = contador;
  }
  else {
    while(quantidade.innerText > 0) {
      contador--;
      quantidade.innerText = contador;
      break;
    }
  }
}

const botoesMaisMenos = document.querySelectorAll('[data-botao]');
botoesMaisMenos.forEach(botao => {
  botao.addEventListener('click', adicionaRemoveItem);
})

// Função para adicionar itens ao carrinho quando o botão "Add to cart" for clicado
function addCart() {
  // Enquanto o carrinho estiver vazio o balãozinho laranja ficará invisível, será exibido apenas quando a quantidade de itens for maior que zero
  let itensCarrinho = document.getElementById('itens-carrinho')
  itensCarrinho.innerText = quantidade.innerText
  itensCarrinho.style.visibility = "visible" 
  if (itensCarrinho.innerText == 0) {
    itensCarrinho.style.visibility = "hidden" 
  }

  // Esconde a caixa com a mensagem de carrinho vazio e exibe a caixa com o item que foi adicionado
  let carrinhoMensagem = document.getElementById('carrinho-vazio')
  let caixaItens = document.getElementById('caixa__itens')
  if(itensCarrinho.innerHTML == 0) {
    carrinhoMensagem.classList.remove('esconder')
    caixaItens.classList.add('esconder')
  } else {
    caixaItens.classList.remove('esconder')
    carrinhoMensagem.classList.add('esconder')
  }

  // Multiplica o valor do produto pela quantidade de vezes que ele foi adicionado ao carrinho, resultando no valor total da compra
  let itensAdicionados = document.querySelector('#quantidade')
  itensAdicionados.innerText = quantidade.innerText
  let calculoPreco = 125 * itensAdicionados.innerText
  let valorTotal = document.querySelector('.valor-total')
  valorTotal.innerText = `$${calculoPreco.toFixed(2)}`
} 

function removeItem() {
  let carrinhoMensagem = document.getElementById('carrinho-vazio')
  carrinhoMensagem.classList.remove("esconder")
  let caixaItens = document.getElementById('caixa__itens')
  caixaItens.classList.add("esconder")
  let itensCarrinho = document.getElementById('itens-carrinho')
  itensCarrinho.style.visibility = "hidden"
}


// Slideshow mobile
let slideindex = 1;
mostrarImagem(slideindex);

function imagemAtual(n) {
  mostrarImagem(slideindex += n);
}

function mostrarImagem(n) {
  let index;
  let imagem = document.getElementsByClassName('imagem');
  if(n > imagem.length) {slideindex = 1}
  if(n < 1) {slideindex = imagem.length}
  for(index = 0; index < imagem.length; index++) {
    imagem[index].style.display = "none";
  }
  imagem[slideindex-1].style.display = "block";
}