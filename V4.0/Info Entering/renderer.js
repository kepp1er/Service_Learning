// renderer.js

document.addEventListener("DOMContentLoaded", function() {
    // Next button click event listener
    const nextButton = document.querySelector('.next-button');
    nextButton.addEventListener('click', function(event) {
        event.preventDefault(); // Prevent default form submission behavior

        // Validate form
        const nameInput = document.getElementById('name');
        const contactInput = document.getElementById('contact');
        const ageInput = document.getElementById('age');
        const genderInput = document.getElementById('gender');
        const visitTimeInput = document.getElementById('visit-time');
        const consultantInput = document.getElementById('consultant');
        const particularInput = document.getElementById('particular');
        const transactionModeInput = document.getElementById('transaction-mode');

        // Check if any field is empty
        if (!nameInput.value || !contactInput.value || !ageInput.value || !genderInput.value || !visitTimeInput.value || !consultantInput.value || !particularInput.value || !transactionModeInput.value) {
            // Display error message
            displayErrorMessage('Please enter all required information');
        } else {
            // Check data type validity
            if (isNaN(parseInt(ageInput.value))) {
                displayErrorMessage('Age must be a number');
            } else if (!/^\d+$/.test(contactInput.value)) {
                displayErrorMessage('Contact Number must contain only digits');
            } else if (!/^[a-zA-Z\s]*$/.test(nameInput.value) || !/^[a-zA-Z\s]*$/.test(consultantInput.value)) {
                displayErrorMessage('Name and Consultant fields must contain only letters and spaces');
            } else {
                // Hide error message
                hideErrorMessage();

                // Proceed to the next page
                window.location.href = "D:/Software%20and%20Stuff/Service%20Learning/V4.0/Confirm/index.html"; // Adjust the URL accordingly
            }
        }
    });
    // Medication reminder button click event listener
    const medicationReminderButton = document.getElementById('medication-reminder-button');
    medicationReminderButton.addEventListener('click', function(event) {
        event.preventDefault(); // Prevent default button click behavior

        // Open medication reminder option
        openMedicationReminderOption();
    });

    // Function to open medication reminder option
    function openMedicationReminderOption() {
        // Implement your logic to open the medication reminder option here
        console.log('Medication reminder option opened');
    }

    // Function to display error message
    function displayErrorMessage(message) {
        const errorMessage = document.getElementById('error-message');
        errorMessage.innerText = message;
        errorMessage.style.display = 'block';
    }

    // Function to hide error message
    function hideErrorMessage() {
        const errorMessage = document.getElementById('error-message');
        errorMessage.style.display = 'none';
    }
});
