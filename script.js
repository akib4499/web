document.addEventListener('DOMContentLoaded', function() {
    showSection('home');
});

function showSection(sectionId) {
    const sections = document.querySelectorAll('.content-section');
    sections.forEach(section => {
        section.style.display = 'none';
    });

    document.getElementById(sectionId).style.display = 'block';
}

document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Thank you for your message!');
});

document.getElementById('enquiryForm').addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Thank you for your enquiry!');
});
