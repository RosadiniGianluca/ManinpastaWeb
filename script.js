document.addEventListener("DOMContentLoaded", function() {
    const backToTopButton = document.getElementById("backToTop");

    // Mostra il pulsante solo dopo che l'utente ha scrollato 100px in basso
    window.addEventListener("scroll", function() {
        if (window.scrollY > 100) {
            backToTopButton.style.display = "block";
        } else {
            backToTopButton.style.display = "none";
        }
    });

    // Imposta l'azione di clic per tornare in cima
    backToTopButton.addEventListener("click", function() {
        window.scrollTo({
            top: 0,
            behavior: "smooth" // Scorrimento graduale verso l'alto
        });
    });
});


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

    // Pulsanti di navigazione navbar
    setNavigationButton("nav a[href='#home']", "index.html");
    setNavigationButton("nav a[href='#menu']", "menu.html");
    setNavigationButton("nav a[href='#galleria']", "gallery.html");
    setNavigationButton("nav a[href='#info']", "orari.html");

    // Pulsanti delle sezioni
    setNavigationButton("div[data-href='#home']", "index.html");
    setNavigationButton("div[data-href='#menu']", "menu.html");
    setNavigationButton("div[data-href='#galleria']", "gallery.html");
    setNavigationButton("div[data-href='#info']", "orari.html");
});
