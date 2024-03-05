// renderer.js

document.addEventListener("DOMContentLoaded", function() {
    // Retrieve hospital name from query parameter
    const urlParams = new URLSearchParams(window.location.search);
    const hospitalName = urlParams.get('hospitalName');
    
    // Display hospital name
    const hospitalNameElement = document.getElementById('hospital-name');
    hospitalNameElement.textContent = hospitalName || 'Hospital Name';

    // Load patient records
    loadPatientRecords();

    // Add fade-in animation to all elements with the 'fade-in' class
    const fadeInElements = document.querySelectorAll('.fade-in');
    fadeInElements.forEach(element => {
        element.classList.add('fade-in');
    });

    // Remove the 'fade-in' class after a delay to prevent animation replay
    setTimeout(() => {
        fadeInElements.forEach(element => {
            element.classList.remove('fade-in');
        });
    }, 500); // Adjust the delay according to your animation duration

    // Add click event listener to the button
    const enterNewPatientButton = document.getElementById('enter-new-patient');
    enterNewPatientButton.addEventListener('click', function() {
        // Redirect to the next page
        window.location.href = 'file:///D:/Software%20and%20Stuff/Service%20Learning/V4.0/Info%20Entering/index.html';
    });
});

function loadPatientRecords() {
    // Sample patient records with random data
    const sampleRecords = [
        { name: "John Doe", contact: "1234567890", age: 30, sex: "Male", date: "2024-02-28", time: "10:00", consultant: "Dr. Smith", particular: "Checkup", cash: "Yes", medicines: "Yes" },
        { name: "Jane Doe", contact: "9876543210", age: 25, sex: "Female", date: "2024-03-01", time: "11:00", consultant: "Dr. Johnson", particular: "Fever", cash: "Yes", medicines: "Yes" },
        { name: "Alice Smith", contact: "5551234567", age: 45, sex: "Female", date: "2024-03-02", time: "12:00", consultant: "Dr. Brown", particular: "Headache", cash: "Yes", medicines: "Yes" }
        // Add more sample records as needed
    ];

    const tbody = document.getElementById('patient-records');

    sampleRecords.forEach(record => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${record.name}</td>
            <td>${record.contact}</td>
            <td>${record.age}</td>
            <td>${record.sex}</td>
            <td>${record.date}</td>
            <td>${record.time}</td>
            <td>${record.consultant}</td>
            <td>${record.particular}</td>
            <td>${record.cash}</td>
            <td>${record.medicines}</td> <!-- Corrected typo: 'medicines' -->
        `;
        tbody.appendChild(row);
    });
}
