// Esta função faz com que a caixa de itens adicionados ao carrinho seja exibida/escondida quando o ícone do carrinho for clicado
function mostrarCaixa() {
    let caixaMensagem = document.getElementById("caixa-mensagem");
    if (caixaMensagem.style.display === "block") {
        caixaMensagem.style.display = "none";
    } else {
        caixaMensagem.style.display = "block";
    }
}


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