// Gestion du formulaire de contact avec Web3Forms
document.addEventListener('DOMContentLoaded', function() {
  const form = document.getElementById('contactForm');
  const formMessage = document.getElementById('formMessage');
  const submitButton = form ? form.querySelector('.submit-button') : null;
  const originalButtonText = submitButton ? submitButton.textContent : '';

  if (form && formMessage && submitButton) {
    form.addEventListener('submit', async function(e) {
      e.preventDefault();

      // Afficher un message de chargement
      formMessage.className = 'form-message loading';
      formMessage.textContent = 'Envoi en cours...';
      submitButton.classList.add('sending');
      submitButton.textContent = 'Envoi...';
      submitButton.disabled = true;

      // Récupérer les données du formulaire
      const formData = new FormData(form);

      try {
        // Envoyer les données à Web3Forms
        const response = await fetch('https://api.web3forms.com/submit', {
          method: 'POST',
          body: formData
        });

        const data = await response.json();

        if (data.success) {
          // Message de succès
          formMessage.className = 'form-message success';
          formMessage.innerHTML = '✅ <strong>Merci pour votre message !</strong><br>DM Solutions vous répondra dans les plus brefs délais.';
          
          // Réinitialiser le formulaire
          form.reset();

          // Faire disparaître le message après 8 secondes
          setTimeout(() => {
            formMessage.style.display = 'none';
          }, 8000);
        } else {
          // Message d'erreur
          formMessage.className = 'form-message error';
          formMessage.innerHTML = '❌ <strong>Erreur lors de l\'envoi.</strong><br>Veuillez réessayer ou nous contacter directement par email.';
        }
      } catch (error) {
        // Erreur de connexion
        formMessage.className = 'form-message error';
        formMessage.innerHTML = '❌ <strong>Erreur de connexion.</strong><br>Vérifiez votre connexion internet et réessayez.';
        console.error('Erreur:', error);
      }

      // Réactiver le bouton
      submitButton.classList.remove('sending');
      submitButton.textContent = originalButtonText;
      submitButton.disabled = false;
    });
  }

  // ========== CAROUSEL FUNCTIONALITY ==========
  const track = document.querySelector('.carousel-track');
  
  if (track) {
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
    if (nextButton) {
      nextButton.addEventListener('click', () => {
        const nextIndex = currentIndex + 1;
        if (nextIndex < numDots) {
          moveToSlide(nextIndex);
        } else {
          moveToSlide(0);
        }
      });
    }

    // Bouton précédent
    if (prevButton) {
      prevButton.addEventListener('click', () => {
        const prevIndex = currentIndex - 1;
        if (prevIndex >= 0) {
          moveToSlide(prevIndex);
        } else {
          moveToSlide(numDots - 1);
        }
      });
    }

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
  }

  // ========== SMOOTH SCROLL ==========
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

  // ========== ANIMATION AU SCROLL ==========
  function revealOnScroll() {
    const elements = document.querySelectorAll('section h2, .service-card, .carousel, .about-content, .contact-container');
    
    elements.forEach(element => {
      const elementTop = element.getBoundingClientRect().top;
      const elementBottom = element.getBoundingClientRect().bottom;
      const windowHeight = window.innerHeight;
      
      if (elementTop < windowHeight * 0.85 && elementBottom > 0) {
        element.classList.add('visible');
      }
    });
  }

  revealOnScroll();
  window.addEventListener('scroll', revealOnScroll);
  setTimeout(revealOnScroll, 100);
});