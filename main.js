document.addEventListener("DOMContentLoaded", function() {
    // Tableau des chemins des images dans le dossier images/figures
    const imagePaths = [
      "images/figures/fish_trajectories.gif",
      "images/figures/fishes.gif",
      "images/figures/site_dog.png",
      "images/figures/site_dog2.png",
      "images/figures/uno.png",
      "images/figures/blocs_venise.png",
      "images/figures/GUI_venise.png",
      "images/figures/robot.png",
      "images/figures/robot2.png",
      "images/figures/robot3.png",
      "images/figures/general_method_2.png",
      "images/figures/h2_dog.png",
      "images/figures/h2_aeroplane.png",
      "images/figures/H2_pvoc10.png",
      "images/figures/H0.png",
      "images/figures/H1.png",
      "images/figures/H2.png",
      "images/figures/attribute_imbalance-1.png",
      "images/figures/covariate_shift-1.png",
      "images/figures/multiway_4-1.png",
      "images/figures/detection.gif",
      "images/figures/tracking.gif",
    ];
  
    // Fonction pour créer un élément image
    function createImageElement(src) {
      const img = document.createElement("img");
      img.src = src;
      return img;
    }
  
    const container = document.querySelector("#right-banner .image-container");
  
    // Mélange aléatoire
    const shuffled = imagePaths.sort(() => Math.random() - 0.5);
    shuffled.forEach(src => {
      container.appendChild(createImageElement(src));
    });
  
    // Duplique le contenu pour créer une boucle continue
    container.innerHTML += container.innerHTML;
  });