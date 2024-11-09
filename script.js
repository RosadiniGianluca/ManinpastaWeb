document.addEventListener("DOMContentLoaded", function() {
    // Seleziona i pulsanti della navbar
    const homeButton = document.querySelector("nav a[href='#home']");
    const menuButton = document.querySelector("nav a[href='#menu']");
    const galleriaButton = document.querySelector("nav a[href='#galleria']");
    const menuButtonIndex = document.querySelector("div [href='#menu']");

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
});
