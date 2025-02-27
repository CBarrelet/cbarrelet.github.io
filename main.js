// Exemple : changer la couleur du titre de la section Accueil après 2 secondes
window.addEventListener('DOMContentLoaded', () => {
    setTimeout(() => {
      const accueilTitle = document.querySelector('#accueil h1');
      if (accueilTitle) {
        accueilTitle.style.color = '#ff0000';
      }
    }, 2000);
  });
  