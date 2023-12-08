document.addEventListener('DOMContentLoaded', function () {
  const blocks = document.querySelectorAll('.block');

  blocks.forEach((block) => {
      const img = block.querySelector('img');
      const title = block.querySelector('.centered-title');

      block.addEventListener('mouseenter', function () {
          img.style.transform = 'scale(1.1)';
      });

      block.addEventListener('mouseleave', function () {
          img.style.transform = 'scale(1)';
      });

      // Ajout d'une gestionnaire d'événements pour le cas où la souris est sur le titre
      title.addEventListener('mouseenter', function () {
          img.style.transform = 'scale(1.1)';
      });

      title.addEventListener('mouseleave', function () {
          img.style.transform = 'scale(1)';
      });
  });
});


  // Fonction pour ajuster les tailles des titres
  function adjustTitleSizes() {
    const titles = document.querySelectorAll(".block h2");
    let maxHeight = 0;

    // Réinitialisez la hauteur pour les titres
    titles.forEach((title) => {
      title.style.height = "auto";
    });

    // Trouvez la hauteur maximale parmi les titres
    titles.forEach((title) => {
      maxHeight = Math.max(maxHeight, title.offsetHeight);
    });

    // Appliquez la hauteur maximale à tous les titres
    titles.forEach((title) => {
      title.style.height = `${maxHeight}px`;
      title.style.backgroundColor = "white";
    });
  }

  // Réajuster la taille des titres lors du redimensionnement de la fenêtre
  window.addEventListener("resize", function () {
    adjustTitleSizes();
  });
  document.addEventListener('DOMContentLoaded', function () {
    const burgerMenu = document.querySelector('.burger-menu');
    const navLinks = document.querySelector('.nav-links');

    burgerMenu.addEventListener('click', function () {
        navLinks.classList.toggle('show');
    });
});

document.addEventListener("DOMContentLoaded", function () {
    adjustTitleSizes(); // Appel initial pour ajuster les tailles au chargement de la page
});

// Fonction pour ajuster les tailles des titres
function adjustTitleSizes() {
    const titles = document.querySelectorAll(".block h2");
    let maxHeight = 0;

    // Réinitialisez la hauteur pour les titres
    titles.forEach((title) => {
        title.style.height = "auto";
    });

    // Trouvez la hauteur maximale parmi les titres
    titles.forEach((title) => {
        maxHeight = Math.max(maxHeight, title.offsetHeight);
    });

    // Appliquez la hauteur maximale à tous les titres
    titles.forEach((title) => {
        title.style.height = `${maxHeight}px`;
        title.style.backgroundColor = "white";
    });
}



document.addEventListener("DOMContentLoaded", function () {
  adjustTitleSizes(); // Appel initial pour ajuster les tailles au chargement de la page
});



// Ajout d'une animation de survol pour les avantages
const details = document.getElementById('details');
const detailItems = details.querySelectorAll('.detail');

detailItems.forEach(item => {
    item.addEventListener('mouseover', () => {
        item.style.transform = 'scale(1.1)';
    });

    item.addEventListener('mouseout', () => {
        item.style.transform = 'scale(1)';
    });
});
