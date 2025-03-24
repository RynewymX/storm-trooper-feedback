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
    if (isNaN(age) || age < 18) {
        alert('Please enter a valid age.');
        return;
    }

    // Phone number validation (xxx-xxx-xxxx format)
    const phonePattern = /^\d{3}-\d{3}-\d{4}$/;
    if (!phonePattern.test(phone)) {
        alert('Please enter a valid phone number in xxx-xxx-xxxx format.');
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

    // City validation (only alphabets and spaces allowed)
    const StatePattern = /^[A-Za-z\s]+$/;
    if (!StatePattern.test(state)) {
        alert('City should only contain alphabets and spaces.');
        return;
    }

    // City validation (allows alphabets, spaces, and periods)
    const cityPattern = /^[A-Za-z\s.]+$/;
    if (!cityPattern.test(city)) {
        alert('City should only contain alphabets, spaces, and periods.');
        return;
    }


    // Street validation (no special characters, but allows numbers and spaces)
    const streetPattern = /^[A-Za-z0-9\s]+$/;
    if (!streetPattern.test(street)) {
        alert('Street should only contain alphabets, numbers, and spaces (no special characters).');
        return;
    }

    alert('Feedback submitted successfully!');
});
