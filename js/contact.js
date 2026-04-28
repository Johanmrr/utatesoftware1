/**
 * contact.js - FormSubmit AJAX Integration
 */

function initializeContactForm() {
    const form = document.getElementById('contactForm');
    const modal = document.getElementById('modal-success');
    const closeModal = document.getElementById('close-modal');

    if (!form) return;

    form.addEventListener('submit', function(e) {
        e.preventDefault();

        const formData = new FormData(form);
        const action = form.getAttribute('action');

        // Show loading state if needed
        const submitBtn = form.querySelector('button[type="submit"]');
        const originalBtnText = submitBtn.innerHTML;
        submitBtn.disabled = true;
        submitBtn.innerHTML = 'Sending...';

        fetch(action, {
            method: 'POST',
            body: formData,
            headers: {
                'Accept': 'application/json'
            }
        })
        .then(response => {
            if (response.ok) {
                if (modal) modal.classList.remove('hidden');
                form.reset();
            } else {
                return response.json().then(data => {
                    if (Object.hasOwn(data, 'errors')) {
                        alert(data["errors"].map(error => error["message"]).join(", "));
                    } else {
                        alert("Oops! There was a problem submitting your form");
                    }
                })
            }
        })
        .catch(error => {
            console.error('Error:', error);
            alert('Error sending form. Please try again later.');
        })
        .finally(() => {
            submitBtn.disabled = false;
            submitBtn.innerHTML = originalBtnText;
        });
    });

    if (closeModal && modal) {
        closeModal.addEventListener('click', () => {
            modal.classList.add('hidden');
        });

        modal.addEventListener('click', e => {
            if(e.target === modal) modal.classList.add('hidden');
        });
    }
}

// Listen for the componentLoaded event to initialize the form
document.addEventListener('componentLoaded', (e) => {
    if (e.detail.selector === '#contact-section') {
        initializeContactForm();
    }
});

// Fallback for cases where it's already in the DOM
if (document.getElementById('contactForm')) {
    initializeContactForm();
}
