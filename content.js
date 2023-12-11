//$('#content').load('commonContent.html');

window.onload = (event) => {

    document.getElementById("header").innerHTML=`
<a class="logo" href="index.html" target="_self">
<div class="logo-image"></div>
<div class="marque"></div>
</a>
<div class="menu">
    <a href="index.html#services" target="_self">SERVICES</a>
    <a href="pov.html" target="_self">P.O.V</a>
    <a href="a-propos.html" target="_self">ABOUT</a>
</div>`;

document.getElementById("footer").innerHTML=`
<div class="footercontent">
<div class="logo2">
  <div class="logo-image"
  iv>
</div>
<div class="mentions-legales-container">
    <p class="mentions-legales">
    <a href="mentions-legales.html" target="_self">Mentions légales</a>
</p>
</div>
</div>
<div class="taïqo-droits">
    Tous droits réservés 2023
</div>`;
document.getElementById("mentions-legales").style.fontSize = "16px"; // Remplacez "16px" par la taille de texte souhaitée.
}; 

document.addEventListener('DOMContentLoaded', function () {
    // Récupérer tous les liens dans le menu de navigation
    const navLinks = document.querySelectorAll('nav a');

    // Ajouter un gestionnaire d'événement de clic à chaque lien
    navLinks.forEach(link => {
        link.addEventListener('click', function (event) {
            event.preventDefault();

            // Récupérer l'ID de la section cible depuis l'attribut href du lien
            const targetId = this.getAttribute('href').substring(1);

            // Trouver l'élément de la section cible
            const targetSection = document.getElementById(targetId);

            // Faire défiler jusqu'à la section cible
            if (targetSection) {
                targetSection.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });
});
