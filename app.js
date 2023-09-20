document.addEventListener("DOMContentLoaded", function () {
    const containerGlobal = document.querySelector(".slide-in-container");
    // Agrego clase de animación al contenedor global
    containerGlobal.classList.add("slide-in-from-left");

    const navbar = document.querySelector(".navbar");
    // Agrego clase de animación al navbar
    navbar.classList.add("slide-in-from-right");
});

document.addEventListener("DOMContentLoaded", function () {
    // Obtener el botón del menú hamburguesa y el menú colapsable
    const menuButton = document.querySelector(".navbar-toggler");
    const menuCollapse = document.querySelector(".navbar-collapse");
    // Obtener todos los enlaces del menú
    const menuLinks = document.querySelectorAll(".navbar-nav a");
    // Agregar un evento de clic a cada enlace
    menuLinks.forEach(function (link) {
        link.addEventListener("click", function () {
            // Verificar si el menú está abierto y cerrarlo
            if (menuCollapse.classList.contains("show")) {
                menuButton.click();
            }
        });
    });
});
//Evento que cada 0,7 segundos cambia el "Curriculum Vitae" por "Curriculum Vitae_"
document.addEventListener("DOMContentLoaded", function () {
    const tituloHeader = document.getElementById("header-title");
    let CurriculumVitae = true;

    setInterval(function () {
        if (CurriculumVitae) {
            tituloHeader.innerHTML = '<img src="cv-source/cv-icon.png" alt="Icono cv">Curriculum Vitae';
        } else {
            tituloHeader.innerHTML = '<img src="cv-source/cv-icon.png" alt="Icono cv">Curriculum Vitae_';
        }
        CurriculumVitae = !CurriculumVitae;
    }, 700);
});

