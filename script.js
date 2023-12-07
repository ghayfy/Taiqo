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

// Réajuster la taille des titres lors du redimensionnement de la fenêtre
window.addEventListener("resize", function () {
    adjustTitleSizes();
});
document.addEventListener("DOMContentLoaded", function () {
  adjustTitleSizes(); // Appel initial pour ajuster les tailles au chargement de la page
});

