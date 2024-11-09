document.addEventListener("DOMContentLoaded", function() {
    // Configura la navigazione dinamica tramite una funzione riutilizzabile
    function setNavigationButton(selector, targetUrl) {
        const button = document.querySelector(selector);
        if (button) {
            button.addEventListener("click", function(event) {
                event.preventDefault(); // Previene il comportamento predefinito
                window.location.href = targetUrl; // Cambia pagina
            });
        }
    }

    // Configura i pulsanti della navbar e altri pulsanti di navigazione
    setNavigationButton("nav a[href='#home']", "index.html");
    setNavigationButton("nav a[href='#menu']", "menu.html");
    setNavigationButton("nav a[href='#galleria']", "gallery.html");

    // Configura i pulsanti di navigazione dell'indice
    setNavigationButton("div[data-href='#menuFromIndex']", "menu.html");
    setNavigationButton("div[data-href='#galleryFromIndex']", "gallery.html");

    // Configura i pulsanti di ritorno alla Home
    setNavigationButton("div[data-href='#homeFromMenu']", "index.html");
    setNavigationButton("div[data-href='#homeFromGallery']", "index.html");
});
