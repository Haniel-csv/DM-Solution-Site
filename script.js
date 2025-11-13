// Gestion du formulaire de contact
function handleSubmit(event) {
  event.preventDefault();
  alert('Merci pour votre message ! Nous vous répondrons dans les plus brefs délais.');
  event.target.reset();
}

// Carousel functionality
document.addEventListener('DOMContentLoaded', function() {
  const track = document.querySelector('.carousel-track');
  const slides = Array.from(track.children);
  const nextButton = document.querySelector('.carousel-button.next');
  const prevButton = document.querySelector('.carousel-button.prev');
  const dotsContainer = document.querySelector('.carousel-dots');

  // Déterminer le nombre de slides visibles selon la largeur d'écran
  function getSlidesPerView() {
    if (window.innerWidth > 900) return 4;
    if (window.innerWidth > 560) return 2;
    return 1;
  }

  let slidesPerView = getSlidesPerView();
  let currentIndex = 0;

  // Créer les points de navigation
  const numDots = Math.ceil(slides.length / slidesPerView);
  for (let i = 0; i < numDots; i++) {
    const dot = document.createElement('button');
    dot.classList.add('carousel-dot');
    dot.setAttribute('aria-label', `Aller à la diapositive ${i + 1}`);
    if (i === 0) dot.classList.add('active');
    dotsContainer.appendChild(dot);
  }

  const dots = Array.from(dotsContainer.children);

  // Déplacer vers une slide spécifique
  function moveToSlide(index) {
    const slideWidth = slides[0].getBoundingClientRect().width;
    const amountToMove = -index * (slideWidth + 20) * slidesPerView;
    track.style.transform = `translateX(${amountToMove}px)`;
    currentIndex = index;
    
    // Mettre à jour les dots
    dots.forEach(dot => dot.classList.remove('active'));
    if (dots[index]) dots[index].classList.add('active');
  }

  // Bouton suivant
  nextButton.addEventListener('click', () => {
    const nextIndex = currentIndex + 1;
    if (nextIndex < numDots) {
      moveToSlide(nextIndex);
    } else {
      moveToSlide(0); // Retour au début
    }
  });

  // Bouton précédent
  prevButton.addEventListener('click', () => {
    const prevIndex = currentIndex - 1;
    if (prevIndex >= 0) {
      moveToSlide(prevIndex);
    } else {
      moveToSlide(numDots - 1); // Aller à la fin
    }
  });

  // Clic sur les dots
  dots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
      moveToSlide(index);
    });
  });

  // Réinitialiser le carousel au redimensionnement
  window.addEventListener('resize', () => {
    const newSlidesPerView = getSlidesPerView();
    if (newSlidesPerView !== slidesPerView) {
      slidesPerView = newSlidesPerView;
      currentIndex = 0;
      
      // Recréer les dots
      dotsContainer.innerHTML = '';
      const newNumDots = Math.ceil(slides.length / slidesPerView);
      for (let i = 0; i < newNumDots; i++) {
        const dot = document.createElement('button');
        dot.classList.add('carousel-dot');
        dot.setAttribute('aria-label', `Aller à la diapositive ${i + 1}`);
        if (i === 0) dot.classList.add('active');
        dotsContainer.appendChild(dot);
      }
      
      moveToSlide(0);
    }
  });
});

// Smooth scroll avec offset pour le header fixe
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      const offsetTop = target.offsetTop - 80;
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      });
    }
  });
});

// Animation au scroll
function revealOnScroll() {
  const elements = document.querySelectorAll('section h2, .service-card, .carousel, .about-content, .contact-container');
  
  elements.forEach(element => {
    const elementTop = element.getBoundingClientRect().top;
    const elementBottom = element.getBoundingClientRect().bottom;
    const windowHeight = window.innerHeight;
    
    // L'élément est visible si son top est dans la fenêtre
    if (elementTop < windowHeight * 0.85 && elementBottom > 0) {
      element.classList.add('visible');
    }
  });
}

// Exécuter au chargement et au scroll
document.addEventListener('DOMContentLoaded', revealOnScroll);
window.addEventListener('scroll', revealOnScroll);

// Réexécuter après un petit délai pour s'assurer que tout est chargé
setTimeout(revealOnScroll, 100);