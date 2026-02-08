var logoAnimation = function (event) {
    const logo = document.getElementById("logo");
    let scroll = event === 'scroll';
    let delay = scroll ? 3000 : 1000;
    logo.classList.remove("animate");
    if(!scroll || window.scrollY != 0) {
        setTimeout(() => {
            logo.classList.add("animate");
        }, delay)
    }

    // Quitar la clase después de un tiempo para poder repetir la animación
    setTimeout(() => {
        logo.classList.remove("animate");
    }, delay + 600);
};


['focus', 'scroll', 'load'].forEach(event => {
    window.addEventListener(event, logoAnimation);
});
