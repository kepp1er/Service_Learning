// renderer.js

document.addEventListener("DOMContentLoaded", function() {
    // Retrieve patient information from localStorage
    const patientInfo = JSON.parse(localStorage.getItem('patientInfo'));

    // Fill in patient information
    document.getElementById('name').textContent = patientInfo.name;
    document.getElementById('contact').textContent = patientInfo.contact;
    document.getElementById('age').textContent = patientInfo.age;

    // Back button click event listener
    const backButton = document.querySelector('.back-button');
    backButton.addEventListener('click', function() {
        // Go back to the previous page
        window.history.back();
    });
});
