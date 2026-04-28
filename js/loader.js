/**
 * Utate Software Solutions - Component Loader
 * Handles dynamic loading of HTML components to replace PHP includes.
 */

async function loadComponent(selector, path) {
    const element = document.querySelector(selector);
    if (!element) return;

    try {
        const response = await fetch(path);
        if (!response.ok) throw new Error(`Failed to load ${path}`);
        const html = await response.text();
        element.innerHTML = html;
        
        // Dispatch custom event to notify that a component was loaded
        const event = new CustomEvent('componentLoaded', { detail: { selector, path } });
        document.dispatchEvent(event);

        // Specific initializations
        if (selector === '#header-container') {
            initializeMobileMenu();
        }
    } catch (error) {
        console.error('Error loading component:', error);
    }
}

function initializeMobileMenu() {
    const menuBtn = document.getElementById('menuBtn');
    const mobileMenu = document.getElementById('mobileMenu');

    if (menuBtn && mobileMenu) {
        menuBtn.addEventListener('click', () => {
            mobileMenu.classList.toggle('hidden');
        });
    }
}

document.addEventListener('DOMContentLoaded', () => {
    loadComponent('#header-container', 'components/header.html');
    loadComponent('#footer-container', 'components/footer.html');

    if (document.body.id === 'home-page') {
        loadComponent('#hero-section', 'components/hero.html');
        loadComponent('#services-section', 'components/services.html');
        loadComponent('#projects-section', 'components/projects.html');
        loadComponent('#stats-section', 'components/stats.html');
        loadComponent('#testimonials-section', 'components/testimonials.html');
        loadComponent('#stack-section', 'components/stack.html');
        loadComponent('#faq-section', 'components/faq.html');
        loadComponent('#contact-section', 'components/contact.html');
    }
});
