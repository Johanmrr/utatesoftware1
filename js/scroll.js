/**
 * scroll.js - Technical Stack Animation
 */

function initializeTechScroll() {
    const container = document.getElementById("tech-scroll");
    if (!container) return;

    const speed = 0.4; 
    let x = 0;

    const parent = container.parentElement;
    if (!parent) return;

    const containerWidth = parent.offsetWidth;
    let totalWidth = container.scrollWidth;

    // Clone elements for continuous loop
    if (container.children.length > 0) {
        while (totalWidth < containerWidth * 2) { 
            Array.from(container.children).forEach(child => {
                const clone = child.cloneNode(true);
                container.appendChild(clone);
            });
            totalWidth = container.scrollWidth;
        }
    }

    function animate() {
        x -= speed;
        if (Math.abs(x) >= totalWidth / 2) {
            x = 0; 
        }
        container.style.transform = `translateX(${x}px)`;
        requestAnimationFrame(animate);
    }
    animate();
}

// Initialize on load or component injection
document.addEventListener("DOMContentLoaded", initializeTechScroll);
document.addEventListener('componentLoaded', (e) => {
    if (e.detail.selector === '#stack-section') {
        initializeTechScroll();
    }
});
