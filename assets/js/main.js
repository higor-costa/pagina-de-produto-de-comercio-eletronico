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

// Função responsável pelo slideshow
let slideIndex = 1;
mostrarThumbs(slideIndex);

function thumbAtual(n) {
  mostrarThumbs(slideIndex = n);
}

function mostrarThumbs() {
  let index;
  let imagens = document.getElementsByClassName("imagem");
  let thumbs = document.getElementsByClassName("thumb");
  
  for (index = 0; index < imagens.length; index++) {
    imagens[index].style.display = "none";
  }
  for (index = 0; index < thumbs.length; index++) {
    thumbs[index].className = thumbs[index].className.replace(" active", "");
  }
  imagens[slideIndex-1].style.display = "block";
  thumbs[slideIndex-1].className += " active";
}


// Abre o Modal
function openModal() {
  document.getElementById("myModal").style.display = "block";
}

// Fechar o Modal
function closeModal() {
  document.getElementById("myModal").style.display = "none";
}

var slidesIndex = 1;
showSlides(slidesIndex);

// Controles próximo/anterior
function plusSlide(n) {
  showSlides(slidesIndex += n);
}

// Controle de imagens em miniatura
function currentSlide(n) {
  showSlides(slidesIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("demo");
  if (n > slides.length) {slidesIndex = 1}
  if (n < 1) {slidesIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" ativo", "");
  }
  slides[slidesIndex-1].style.display = "block";
  dots[slidesIndex-1].className += " ativo";
}

// Função para aumentar e diminuir itens no carrinho
let quantidade = document.querySelector(".botoes__quantidade-itens")
let contador = 0;
function mais() {
  contador++;
  quantidade.innerText = contador;
}

function menos() {
  while(quantidade.innerText > 0) {
    contador--;
    quantidade.innerText = contador;
    break;
  }
}

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