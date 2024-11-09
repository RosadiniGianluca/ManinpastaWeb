document.addEventListener("DOMContentLoaded", function() {
    // Seleziona i pulsanti della navbar
    const homeButton = document.querySelector("nav a[href='#home']");
    const menuButton = document.querySelector("nav a[href='#menu']");
    const galleriaButton = document.querySelector("nav a[href='#galleria']");
    const menuButtonIndex = document.querySelector("div[data-href='#menuFromIndex']");
    const galleryButtonIndex = document.querySelector("div[data-href='#galleryFromIndex']");
    const homeButtonMenu = document.querySelector("div[data-href='#homeFromMenu']");
    const homeButtonGallery = document.querySelector("div[data-href='#homeFromGallery']");

    // Imposta l'azione di clic per il pulsante Home
    if (homeButton) {
        homeButton.addEventListener("click", function(event) {
            event.preventDefault(); // Previeni il comportamento predefinito del link
            window.location.href = "index.html"; // Cambia pagina
        });
    }

    // Imposta l'azione di clic per il pulsante Menu
    if (menuButton) {
        menuButton.addEventListener("click", function(event) {
            event.preventDefault(); // Previeni il comportamento predefinito del link
            window.location.href = "menu.html"; // Cambia pagina
        });
    }

    // Imposta l'azione di clic per il pulsante Galleria
    if (galleriaButton) {
        galleriaButton.addEventListener("click", function(event) {
            event.preventDefault(); // Previeni il comportamento predefinito del link
            window.location.href = "gallery.html"; // Cambia pagina
        });
    }

    // Imposta l'azione di clic per il pulsante Menu
    if (menuButtonIndex) {
        menuButtonIndex.addEventListener("click", function(event) {
            event.preventDefault(); // Previeni il comportamento predefinito del link
            window.location.href = "menu.html"; // Cambia pagina
        });
    }

    // Imposta l'azione di clic per il pulsante Galleria
    if (galleryButtonIndex) {
        galleryButtonIndex.addEventListener("click", function(event) {
            event.preventDefault(); // Previeni il comportamento predefinito del link
            window.location.href = "gallery.html"; // Cambia pagina
        });
    }

    // Imposta l'azione di clic per il pulsante Home dal menu
    if (homeButtonMenu) {
        homeButtonMenu.addEventListener("click", function(event) {
            event.preventDefault(); // Previeni il comportamento predefinito del link
            window.location.href = "index.html"; // Cambia pagina
        });
    }

    // Imposta l'azione di clic per il pulsante Home dalla galleria
    if (homeButtonGallery) {
        homeButtonGallery.addEventListener("click", function(event) {
            event.preventDefault(); // Previeni il comportamento predefinito del link
            window.location.href = "index.html"; // Cambia pagina
        });
    }
});
