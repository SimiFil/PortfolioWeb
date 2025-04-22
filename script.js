window.onload = function() {
    setupBurgerMenu();
    setupScrollEffect();
    setupNavLinks();

    const currentPage = window.location.pathname;
    const lastSlashIndex = currentPage.lastIndexOf("/");
    const pageName = currentPage.substring(lastSlashIndex + 1);

    console.log(currentPage);
    console.log("page name: " + pageName)
    
    const navLinks = document.querySelectorAll('.navigation a');
    navLinks.forEach(function(link) {
        const fileName = link.getAttribute('href');
        const dotIndex = fileName.indexOf(".");
        const baseName = dotIndex !== -1 ? fileName.slice(0, dotIndex) : fileName;
        const singularBaseName = baseName.endsWith("s") ? baseName.slice(0, -1) : baseName;
        console.log("base name: " + baseName);

        if ((currentPage.includes(singularBaseName) && singularBaseName !== "") || (link.getAttribute('href') === "./" && pageName === "")) {
            link.classList.add('current');
        }
    });

    document.querySelectorAll("img").forEach(img => {
        img.setAttribute("loading", "lazy"); 
    });
}

function setupBurgerMenu() {
    const burgerMenu = document.querySelector('.burger-menu');
    const navigation = document.querySelector('.navigation');
    
    burgerMenu.addEventListener('click', function() {
        if (navigation.classList.contains('scrolled')) {
            navigation.classList.remove('scrolled');
        } else {
            navigation.classList.add('scrolled');
        }

        this.classList.toggle('active');
        navigation.classList.toggle('active');
    });

    
}

function setupScrollEffect() {
    const navigation = document.querySelector('.navigation');
    
    window.addEventListener('scroll', function() {
        if (window.scrollY > 50 && !navigation.classList.contains('active')) {
            navigation.classList.add('scrolled');
        } else {
            navigation.classList.remove('scrolled');
        }        
    });
}

function setupNavLinks() {
    const navLinks = document.querySelectorAll('nav a');
    const burgerMenu = document.querySelector('.burger-menu');
    const navigation = document.querySelector('.navigation');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            burgerMenu.classList.remove('active');
            navigation.classList.remove('active');

            if (window.scrollY > 50) {
                navigation.classList.add('scrolled');
            } else {
                navigation.classList.remove('scrolled');
            }
        });
    });
}