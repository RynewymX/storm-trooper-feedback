document.getElementById('feedbackForm').addEventListener('submit', function(e) {
    e.preventDefault();

    const name = document.getElementById('name').value.trim();
    const age = parseInt(document.getElementById('age').value);
    const phone = document.getElementById('phone').value.trim();
    const street = document.getElementById('street').value.trim();
    const city = document.getElementById('city').value.trim();
    const state = document.getElementById('state').value.trim();
    const zip = document.getElementById('zip').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();

    // Basic validation
    if (!name || !age || !phone || !street || !city || !state || !zip || !email || !message) {
        alert('All fields are required.');
        return;
    }

    // Age validation
    if (isNaN(age) || age <= 0) {
        alert('Please enter a valid age.');
        return;
    }

    // Phone number validation (10 digits)
    const phonePattern = /^\d{10}$/;
    if (!phonePattern.test(phone)) {
        alert('Please enter a valid 10-digit phone number.');
        return;
    }

    // ZIP code validation (5 digits)
    const zipPattern = /^\d{5}$/;
    if (!zipPattern.test(zip)) {
        alert('Please enter a valid 5-digit ZIP code.');
        return;
    }

    // Email validation
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
        alert('Please enter a valid email address.');
        return;
    }

    alert('Feedback submitted successfully!');
});
