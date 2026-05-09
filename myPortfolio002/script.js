// ===================== LOADING SCREEN =====================
window.addEventListener('load', function() {
    const loadingScreen = document.getElementById('loadingScreen');
    if (loadingScreen) {
        setTimeout(() => {
            loadingScreen.style.opacity = '0';
            loadingScreen.style.transition = 'opacity 0.5s ease-out';
            setTimeout(() => { loadingScreen.style.display = 'none'; }, 500);
        }, 800);
    }
});

// ===================== THEME TOGGLE =====================
const themeToggle = document.getElementById('themeToggle');
const htmlElement = document.documentElement;
const bodyElement = document.getElementById('body');

const currentTheme = localStorage.getItem('theme') || 'dark';
htmlElement.setAttribute('data-theme', currentTheme);
updateThemeIcon(currentTheme);
if (currentTheme === 'light') applyLightMode();

themeToggle.addEventListener('click', function() {
    const theme = htmlElement.getAttribute('data-theme');
    const newTheme = theme === 'dark' ? 'light' : 'dark';
    htmlElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
    updateThemeIcon(newTheme);
    if (newTheme === 'light') applyLightMode(); 
    else applyDarkMode();
});

function updateThemeIcon(theme) {
    const icon = themeToggle.querySelector('i');
    if (theme === 'dark') {
        icon.classList.remove('fa-sun');
        icon.classList.add('fa-moon');
    } else {
        icon.classList.remove('fa-moon');
        icon.classList.add('fa-sun');
    }
}

function applyLightMode() {
    bodyElement.style.background = 'linear-gradient(to bottom right, #faf7f2, #f0e7e0, #fdfbf8)';
    bodyElement.style.color = '#2d2416';
}

function applyDarkMode() {
    bodyElement.style.background = 'linear-gradient(to bottom right, #0f172a, #1e293b, #0f172a)';
    bodyElement.style.color = 'white';
}

// ===================== MOBILE MENU TOGGLE =====================
const mobileMenuToggle = document.getElementById('mobileMenuToggle');
const mobileMenu = document.getElementById('mobileMenu');

if (mobileMenuToggle) {
    mobileMenuToggle.addEventListener('click', function() {
        mobileMenu.classList.toggle('hidden');
    });

    // Close menu when a link is clicked
    const menuLinks = mobileMenu.querySelectorAll('a');
    menuLinks.forEach(link => {
        link.addEventListener('click', function() {
            mobileMenu.classList.add('hidden');
        });
    });
}

// ===================== PROFILE CIRCLE ANIMATION =====================
const profileCircle = document.getElementById('profileCircle');
if (profileCircle) {
    profileCircle.addEventListener('mouseenter', function() {
        profileCircle.style.animation = 'none';
        setTimeout(() => { 
            profileCircle.style.animation = 'smileAnimation 0.6s ease-in-out'; 
        }, 10);
    });
}

// ===================== SKILLS CAROUSEL ANIMATION =====================
const skillsTrack = document.getElementById('skillsTrack');
if (skillsTrack) {
    const cardWidth = 160 + 24; // width + gap
    const totalCards = 4;
    const loopWidth = cardWidth * totalCards;
    let offset = 0;
    let paused = false;
    let rafId;

    function animateCarousel() {
        if (!paused) {
            offset += 0.5;
            if (offset >= loopWidth) offset = 0;
            skillsTrack.style.transform = `translateX(-${offset}px)`;
        }
        rafId = requestAnimationFrame(animateCarousel);
    }

    const carouselWrapper = document.querySelector('.skills-carousel-wrapper');
    if (carouselWrapper) {
        carouselWrapper.addEventListener('mouseenter', () => { paused = true; });
        carouselWrapper.addEventListener('mouseleave', () => { paused = false; });
    }

    animateCarousel();
}

// ===================== BOTTOM NAVIGATION ACTIVE STATE =====================
const bottomNavItems = document.querySelectorAll('.bottom-nav-item');
const currentPage = window.location.pathname.split('/').pop() || 'index.html';

// Map HTML files to data-section attributes
const pageMap = {
    'index.html': 'about',
    'about.html': 'about',
    'skills.html': 'skills',
    'projects.html': 'projects',
    'photos.html': 'photos',
    'contact.html': 'contact'
};

const activePage = pageMap[currentPage] || 'about';

bottomNavItems.forEach(item => {
    const isActive = item.getAttribute('data-section') === activePage;
    updateBottomNavItem(item, isActive);
});

function updateBottomNavItem(item, isActive) {
    const icon = item.querySelector('i');
    const label = item.querySelector('span');
    const iconWrap = item.querySelector('.bottom-nav-icon');

    if (isActive) {
        icon.classList.remove('text-slate-400');
        icon.classList.add('text-cyan-400');
        label.classList.remove('text-slate-500');
        label.classList.add('text-cyan-400');
        iconWrap.classList.add('bg-cyan-500/20');
        iconWrap.classList.remove('bg-cyan-500/0');
    } else {
        icon.classList.add('text-slate-400');
        icon.classList.remove('text-cyan-400');
        label.classList.add('text-slate-500');
        label.classList.remove('text-cyan-400');
        iconWrap.classList.remove('bg-cyan-500/20');
        iconWrap.classList.add('bg-cyan-500/0');
    }
}
