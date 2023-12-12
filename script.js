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





//partie formulaire de contact
    function submitForm() {
        // You can add your form submission logic here
        // For demonstration purposes, let's display a success message
        const formMessage = document.getElementById('formMessage');
        formMessage.innerHTML = 'Votre message a été envoyé avec succès!';
        formMessage.style.color = '#0a804a'; // Green color for success
        resetForm();
    }

    function resetForm() {
        // You can add logic to reset form fields if needed
        document.getElementById('contactForm').reset();
    }

    $(document).ready(function() {
      var timer = 4000;
      var i = 0;
      var max = $('#c > li').length;
      
  });
  