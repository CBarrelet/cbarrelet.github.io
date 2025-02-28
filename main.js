document.addEventListener("DOMContentLoaded", function() {
    // Tableau des chemins des images dans le dossier images/figures
    const imagePaths = [
      "images/figures/fish_trajectories.gif",
      "images/figures/fishes.gif",
      "images/figures/site_dog.png",
      "images/figures/site_dog2.png",
      "images/figures/uno.png",
      "images/figures/detection.gif",
      "images/figures/tracking.gif",
      "images/figures/blocs_venise.png",  // Image associée à MAELSTROM
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
      "images/figures/multiway_4-1.png"
    ];
  
    // Fonction pour créer un élément image avec les écouteurs de clic appropriés
    function createImageElement(src) {
      const img = document.createElement("img");
      img.src = src;
      img.style.cursor = "pointer";
      console.log("Création de l'image: " + src);
  
      if (src.endsWith("uno.png") || src.endsWith("detection.gif") || src.endsWith("tracking.gif")) {
        img.addEventListener("click", function() {
          console.log("Image UNO cliquée");
          window.location.href = "presentations.html#uno_presentation";
        });
      }
      if (src.endsWith("site_dog.png") || src.endsWith("site_dog2.png")) {
        img.addEventListener("click", function() {
          window.location.href = "presentations.html#dog_presentation";
        });
      }
      if (src.endsWith("fish_trajectories.gif") || src.endsWith("fishes.gif")) {
        img.addEventListener("click", function() {
          window.location.href = "presentations.html#fish_presentation";
        });
      }
      if (src.endsWith("blocs_venise.png") ||
        src.endsWith("GUI_venise.png") ||
        src.endsWith("robot.png") ||
        src.endsWith("robot2.png") ||
        src.endsWith("robot3.png")
        ) {
        img.addEventListener("click", function() {
          console.log("Image blocs_venise cliquée");
          window.location.href = "contributions.html#maelstrom";
        });
      }
      if (
        src.endsWith("general_method_2.png") || 
        src.endsWith("h2_aeroplane.png") ||
        src.endsWith("h2_dog.png") ||
        src.endsWith("H2_pvoc10.png") ||
        src.endsWith("H0.png") ||
        src.endsWith("H1.png") ||
        src.endsWith("H2.png") ||
        src.endsWith("multiway_4-1.png")
      ) {
        img.addEventListener("click", function() {
          window.location.href = "presentations.html#ckcv_presentation";
        });
      }
      return img;
    }
  
    const container = document.querySelector("#right-banner .image-container");
    const shuffled = imagePaths.sort(() => Math.random() - 0.5);
    const imageElements = shuffled.map(src => createImageElement(src));
    imageElements.forEach(img => container.appendChild(img));
  
    // Duplication des images en clonant pour la boucle continue
    // imageElements.forEach(img => {
    //   const clone = img.cloneNode(true);
    //   // Ré-attacher les écouteurs pour le clone (vérification par includes)
    //   if (clone.src.includes("uno.png") || clone.src.includes("detection.gif") || clone.src.includes("tracking.gif")) {
    //     clone.addEventListener("click", function() {
    //       window.location.href = "presentations.html#uno_presentation";
    //     });
    //   }
    //   if (clone.src.includes("site_dog.png") || clone.src.includes("site_dog2.png")) {
    //     clone.addEventListener("click", function() {
    //       window.location.href = "presentations.html#dog_presentation";
    //     });
    //   }
    //   if (clone.src.includes("fish_trajectories.gif") || clone.src.includes("fishes.gif")) {
    //     clone.addEventListener("click", function() {
    //       window.location.href = "presentations.html#fish_presentation";
    //     });
    //   }
    //   if (clone.src.includes("blocs_venise.png")) {
    //     clone.addEventListener("click", function() {
    //       window.location.href = "contributions.html#maelstrom";
    //     });
    //   }
    //   if (
    //     clone.src.includes("general_method_2.png") || 
    //     clone.src.includes("h2_aeroplane.png") ||
    //     clone.src.includes("h2_dog.png") ||
    //     clone.src.includes("H2_pvoc10.png") ||
    //     clone.src.includes("H0.png") ||
    //     clone.src.includes("H1.png") ||
    //     clone.src.includes("H2.png") ||
    //     clone.src.includes("multiway_4-1.png")
    //   ) {
    //     clone.addEventListener("click", function() {
    //       window.location.href = "presentations.html#ckcv_presentation";
    //     });
    //   }
    //   container.appendChild(clone);
    // });
  });
  