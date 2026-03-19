// Variables d’état
let index = 0;          // diapositive affichée

// Références DOM
const slide     = document.getElementById('slide');
const caption   = document.getElementById('caption');

const imgPrec   = document.getElementById('imgBtnGauche');

const imgSuiv   = document.getElementById('imgBtnDroit');
const imgChoix  = document.getElementById('imgChoix');

document.getElementById('adminControls').style.display = 'block';

function administrateur() {
  const adminPassword = prompt("mot de passe administrateur");
  const isAdmin = adminPassword === "G@ston";
  if (isAdmin) { document.getElementById('adminControls').style.display = 'block';} 
          else { document.getElementById('adminControls').style.display = 'none';}
}
// ------------------------------------------------------------------
// Fonction d’affichage d’une diapositive
function showChoix(i) {
  // on s’assure que l’indice reste dans les limites du tableau
  index = (i + slides.length) % slides.length;
  indexPrec = (i-1 + slides.length) % slides.length;
  indexSuiv = (i+1 + slides.length) % slides.length;
  // mise à jour de la source de l’image et de la légende
  imgChoix.src = slides[index].src;
  imgPrec.src = slides[indexPrec].src;
  imgSuiv.src = slides[indexSuiv].src;
}

function showSlide(i) {
  // on s’assure que l’indice reste dans les limites du tableau
  index = (i + slides.length) % slides.length;
  // mise à jour de la source de l’image et de la légende
  slide.src = slides[index].src;
  caption.textContent = slides[index].caption;
}

// ------------------------------------------------------------------
// Navigation manuelle
function nextSlide() { showChoix(index + 1); }
function prevSlide() { showChoix(index - 1); }

// ------------------------------------------------------------------
// Chargement de la première image au démarrage
document.addEventListener('DOMContentLoaded', () => {
  imgChoix.src = slides[index].src;
  indexPrec = (index-1 + slides.length) % slides.length; imgPrec.src = slides[indexPrec].src;
  indexSuiv = (index+1 + slides.length) % slides.length; imgSuiv.src = slides[indexSuiv].src;
  showSlide(index);          // affiche la première image
});
