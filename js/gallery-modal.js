/**
 * gallery-modal.js - Project Gallery and Carousel
 */

function initializeGalleryModal() {
    const modal = document.getElementById('galleryModal');
    const modalImg = document.getElementById('modalImg');
    const modalPrev = document.getElementById('modalPrev');
    const modalNext = document.getElementById('modalNext');
    const modalClose = document.getElementById('modalClose');
    const modalThumbs = document.getElementById('modalThumbs');
    
    if (!modal) return;

    let modalState = { images: [], index: 0 };

    function openModal(images, index = 0) {
      modalState.images = images;
      modalState.index = index;
      renderModal();
      modal.classList.remove('hidden');
      document.body.style.overflow = 'hidden';
    }

    function closeModal() {
      modal.classList.add('hidden');
      document.body.style.overflow = '';
    }

    function renderModal() {
      if (!modalImg) return;
      modalImg.src = modalState.images[modalState.index];
      modalThumbs.innerHTML = '';
      modalState.images.forEach((src, i) => {
        const thumb = document.createElement('img');
        thumb.src = src;
        thumb.className = 'w-20 h-12 object-cover rounded cursor-pointer border-2 border-transparent';
        thumb.addEventListener('click', () => {
          modalState.index = i;
          renderModal();
        });
        modalThumbs.appendChild(thumb);
      });
      [...modalThumbs.children].forEach((t, i) => {
        t.classList.toggle('ring-2', i === modalState.index);
        t.classList.toggle('ring-[var(--brand-orange)]', i === modalState.index);
      });
    }

    if (modalPrev) modalPrev.onclick = () => {
      modalState.index = (modalState.index - 1 + modalState.images.length) % modalState.images.length;
      renderModal();
    };
    if (modalNext) modalNext.onclick = () => {
      modalState.index = (modalState.index + 1) % modalState.images.length;
      renderModal();
    };
    if (modalClose) modalClose.onclick = closeModal;
    modal.addEventListener('click', e => { if (e.target === modal) closeModal(); });

    // === CARRUSEL PRINCIPAL ===
    const mainCarousel = document.getElementById('projectCarousel');
    const mainPrev = document.getElementById('mainPrev');
    const mainNext = document.getElementById('mainNext');
    const mainDots = document.getElementById('mainDots');

    if (mainCarousel) {
        let mainIndex = 0;
        const totalCards = mainCarousel.children.length;

        function getVisibleCards() {
          if (window.innerWidth >= 1024) return 3;
          if (window.innerWidth >= 640) return 2;
          return 1;
        }

        let visibleCards = getVisibleCards();
        let totalGroups = Math.ceil(totalCards / visibleCards);

        function renderMainDots() {
          if (!mainDots) return;
          mainDots.innerHTML = '';
          for (let i = 0; i < totalGroups; i++) {
            const dot = document.createElement('span');
            dot.className = `w-3 h-3 rounded-full cursor-pointer ${i === mainIndex ? 'bg-[var(--brand-blue)]' : 'bg-gray-300'}`;
            dot.addEventListener('click', () => {
              mainIndex = i;
              updateMainCarousel();
            });
            mainDots.appendChild(dot);
          }
          updateMainDotsActive();
        }

        function updateMainDotsActive() {
          if (!mainDots) return;
          [...mainDots.children].forEach((d, i) => {
            d.className = `w-3 h-3 rounded-full cursor-pointer ${i === mainIndex ? 'bg-[var(--brand-blue)]' : 'bg-gray-300'}`;
          });
        }

        function updateMainCarousel() {
          const viewport = mainCarousel.parentElement;
          const viewportWidth = viewport.clientWidth;
          mainCarousel.style.transform = `translateX(-${mainIndex * viewportWidth}px)`;
          updateMainDotsActive();
        }

        if (mainNext) mainNext.addEventListener('click', () => {
          if (mainIndex < totalGroups - 1) {
            mainIndex++;
            updateMainCarousel();
          }
        });

        if (mainPrev) mainPrev.addEventListener('click', () => {
          if (mainIndex > 0) {
            mainIndex--;
            updateMainCarousel();
          }
        });

        window.addEventListener('resize', () => {
          const newVisible = getVisibleCards();
          if (newVisible !== visibleCards) {
            visibleCards = newVisible;
            totalGroups = Math.ceil(totalCards / visibleCards);
            mainIndex = Math.min(mainIndex, totalGroups - 1);
            renderMainDots();
            updateMainCarousel();
          } else {
            updateMainCarousel();
          }
        });

        totalGroups = Math.ceil(totalCards / visibleCards);
        renderMainDots();
        updateMainCarousel();
    }

    // 🔹 Imágenes abren el modal
    document.querySelectorAll('.project-image').forEach(img => {
      img.addEventListener('click', e => {
        const card = e.target.closest('.project-card');
        if (card && card.dataset.images) {
            const imgs = JSON.parse(card.dataset.images);
            openModal(imgs, 0);
        }
      });
    });
}

// Initialize on load or component injection
document.addEventListener('DOMContentLoaded', initializeGalleryModal);
document.addEventListener('componentLoaded', (e) => {
    if (e.detail.selector === '#projects-section') {
        initializeGalleryModal();
    }
});
