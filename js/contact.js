/**
 * contact.js - FormSubmit AJAX Integration
 */

function initializeContactForm() {
    const form = document.getElementById('contactForm');
    const modal = document.getElementById('modal-success');
    const closeModal = document.getElementById('close-modal');

    if (!form) {
        console.log("Contact form not found yet...");
        return;
    }

    console.log("Contact form initialized and ready.");

    form.addEventListener('submit', function(e) {
        e.preventDefault();
        console.log("Form submission started...");

        const formData = new FormData(form);
        const action = form.getAttribute('action');

        // Show loading state
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
            console.log("Response received from FormSubmit:", response.status);
            if (response.ok) {
                if (modal) {
                    modal.classList.remove('hidden');
                    console.log("Success modal shown.");
                } else {
                    alert("Inquiry Sent! Thank you.");
                }
                form.reset();
            } else {
                return response.json().then(data => {
                    console.error("FormSubmit Error Data:", data);
                    if (data.errors) {
                        alert(data.errors.map(error => error.message).join(", "));
                    } else {
                        alert("Oops! There was a problem submitting your form");
                    }
                })
            }
        })
        .catch(error => {
            console.error('Fetch Error:', error);
            alert('Error sending form. Please try again later.');
        })
        .finally(() => {
            submitBtn.disabled = false;
            submitBtn.innerHTML = originalBtnText;
        });
    });

    if (closeModal && modal) {
        closeModal.onclick = () => modal.classList.add('hidden');
        window.onclick = (e) => {
            if (e.target === modal) modal.classList.add('hidden');
        };
    }
}

// Listen for the componentLoaded event to initialize the form
document.addEventListener('componentLoaded', (e) => {
    if (e.detail.selector === '#contact-section') {
        console.log("Contact component loaded dynamically.");
        initializeContactForm();
    }
});

// Fallback for cases where it's already in the DOM (like index_LOCAL.html)
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initializeContactForm);
} else {
    initializeContactForm();
}
