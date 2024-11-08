document.addEventListener("DOMContentLoaded", function() {
    // Seleziona i pulsanti della navbar
    const homeButton = document.querySelector("nav a[href='#home']");
    const menuButton = document.querySelector("nav a[href='#menu']");
    const galleriaButton = document.querySelector("nav a[href='#galleria']");

    // Imposta l'azione di clic per il pulsante Home
    homeButton.addEventListener("click", function(event) {
        event.preventDefault(); // Previeni il comportamento predefinito del link
        window.location.href = "../html/index.html"; // Cambia pagina
    });
    // Imposta l'azione di clic per il pulsante Menu
    menuButton.addEventListener("click", function(event) {
        event.preventDefault(); // Previeni il comportamento predefinito del link
        window.location.href = "../html/menu.html"; // Cambia pagina
    });

    // Imposta l'azione di clic per il pulsante Galleria
    galleriaButton.addEventListener("click", function(event) {
        event.preventDefault(); // Previeni il comportamento predefinito del link
        window.location.href = "../html/gallery.html"; // Cambia pagina
    });
});
