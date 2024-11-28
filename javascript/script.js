// Initialisation du MENU BURGER (les 95 prochaines lignes sont indispensables même si pas très bien rédigé)
// D'autres solutions ont été cherchée mais elles comportaient toutes des bugs (souvent les mêmes)
// Initialsation du MOBILE MENU BURGER
let isMenuVisible = false;

// Fonction pour basculer le menu burger
function toggler() {
    const icon = document.querySelector("#toggler");
    const menu = document.querySelector('.menu');
    const mobileMenu = document.querySelector('.mobile-menu'); // Sélectionne le menu mobile

    if (!icon || !menu || !mobileMenu) return;

    // Bascule la visibilité du menu pour les écrans en dessous de 1300px
    if (window.innerWidth <= 1300) {
        isMenuVisible = !isMenuVisible; // Change l'état de visibilité
        // opérateurs ternaires, pour éviter la rédaction de if / else. 
        // la valeur de icon.innerHTML est mise sur close par défaux sinon elle mise sur menu. C'est en fonction de la variable isMenuVisible
        icon.innerHTML = isMenuVisible ? "close" : "menu";
        menu.style.display = isMenuVisible ? "block" : "none";
        
        // Change la couleur de fond et le box-shadow du menu mobile
        mobileMenu.style.backgroundColor = isMenuVisible ? "#333231" : ""; // Met à jour la couleur de fond
        mobileMenu.style.boxShadow = isMenuVisible ? "none" : ""; // Réinitialise le box-shadow
    }
}



// Fonction pour fermer le menu (pour les écrans mobiles uniquement)
function closeMenu() {
    const menu = document.querySelector('.menu');
    const icon = document.querySelector("#toggler");
    const mobileMenu = document.querySelector('.mobile-menu'); // Sélectionne le menu mobile

    // Ferme le menu uniquement si l'écran est en mode mobile
    if (window.innerWidth <= 1300) {
        if (menu) menu.style.display = 'none'; // Fermer le menu
        if (icon) icon.innerHTML = "menu"; // Réinitialise l'icône
        mobileMenu.style.backgroundColor = ""; // Réinitialise la couleur de fond
        mobileMenu.style.boxShadow = ""; // Réinitialise le box-shadow
        isMenuVisible = false; // Réinitialise l'état de visibilité
    }
}

// Ferme le menu sur les clics de lien
// Pour chaque lien trouvé, la fonction exécute le code suivant
document.querySelectorAll('.menu-listing a, .out-menu-listing a, .accueil').forEach(link => {
    link.addEventListener('click', closeMenu); // Ferme le menu lorsque l'un des liens est cliqué
});

// Gestion du redimensionnement de la fenêtre
window.addEventListener('resize', function() {
    const icon = document.querySelector("#toggler");
    const menu = document.querySelector('.menu');
    const mobileMenu = document.querySelector('.mobile-menu');

    if (window.innerWidth > 1300) {
        // Au-dessus de 1300px, on affiche le menu et masque le menu mobile
        isMenuVisible = false;  // Réinitialise l'état pour les grands écrans
        if (menu) menu.style.display = 'block'; // Garde le menu visible
        if (mobileMenu) {
            mobileMenu.style.display = 'none'; // Masque le menu mobile
            mobileMenu.style.backgroundColor = ""; // Réinitialise la couleur de fond
            mobileMenu.style.boxShadow = ""; // Réinitialise le box-shadow
        }
        if (icon) icon.innerHTML = "menu"; // Réinitialise l'icône
    } else {
        // En dessous de 1300px, on masque le menu par défaut, sauf si toggler l’a ouvert
        if (menu) menu.style.display = isMenuVisible ? 'block' : 'none';
        if (mobileMenu) mobileMenu.style.display = 'flex';
    }
});



// Initialisation lors du chargement de la page
window.addEventListener('DOMContentLoaded', function () {
    const icon = document.querySelector("#toggler");
    const menu = document.querySelector('.menu');
    const mobileMenu = document.querySelector('.mobile-menu');

    console.log('Initialisation - Largeur actuelle :', window.innerWidth);

    // Si la page est chargée avec une largeur supérieure à 1300px
    if (window.innerWidth > 1300) {
        isMenuVisible = false;
        if (menu) menu.style.display = 'block'; // Affiche le menu classique
        if (mobileMenu) mobileMenu.style.display = 'none'; // Masque le menu mobile
        if (icon) icon.innerHTML = "menu"; // Réinitialise l'icône
    } 
    // Si la page est chargée avec une largeur inférieure à 1300px
    else {
        isMenuVisible = false;
        if (menu) menu.style.display = 'none'; // Masque le menu classique
        if (mobileMenu) mobileMenu.style.display = 'flex'; // Affiche le menu mobile
        if (icon) icon.innerHTML = "menu"; // Réinitialise l'icône
    }

    // Ajout d'un gestionnaire d'événements aux liens dans le menu
    const menuLinks = document.querySelectorAll('.menu-listing a, .accueil'); // Sélectionne tous les liens du menu, y compris 'Accueil'
    menuLinks.forEach(link => {
        link.addEventListener('click', closeMenu); // Ferme le menu lorsque l'un des liens est cliqué
    });
});



// ----------- SLIDERS -----------
const prevArrow = document.querySelector('.prev-arrow');
const nextArrow = document.querySelector('.next-arrow');
const carouselCards = document.querySelector('.carousel-cards');
const backgroundCarousel = document.querySelector('.background-carousel');
const cards = document.querySelectorAll('.card');
const slides = document.querySelectorAll('.background-slide');

let currentIndex = 0;

function showCard(index) {
    // -index : pour aller de gauche à droite ; la valeur 100 est équivalent à 100%
    const offset = -index * 100;
    carouselCards.style.transform = `translateX(${offset}%)`;
    backgroundCarousel.style.transform = `translateX(${offset}%)`; 
}

// Slide précédent
prevArrow.addEventListener('click', () => {
  if (currentIndex > 0) {
    currentIndex--;
    showCard(currentIndex);
  }
});

// Slide suivante
nextArrow.addEventListener('click', () => {
  if (currentIndex < cards.length - 1) {
    currentIndex++;
    showCard(currentIndex);
  }
});

// Appel de la fonction
showCard(currentIndex);

// ------ Changement Background ------
function updateBackground(index) {
    const cardImg = cards[index].querySelector('.card-img');
    const backgroundImage = window.getComputedStyle(cardImg).backgroundImage;
    sectionProjets.style.backgroundImage = backgroundImage;
    }


    

// ----------- FORMULAIRE -----------
function validateForm() {
    alert("Votre message a bien été envoyé. C'est ce que j'aurais dis si le site était entièrement fonctionnel !"); // envoie l'alerte après validation
    return false; // enlève le rechargement de la page après l'envoie du formulaire
}  