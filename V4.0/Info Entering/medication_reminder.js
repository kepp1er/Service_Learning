document.addEventListener("DOMContentLoaded", function() {
    const medicationForm = document.getElementById('medication-form');
    medicationForm.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent default form submission

        // Get form data
        const medicineName = document.getElementById('medicine-name').value;
        const timesPerDay = document.getElementById('times-per-day').value;
        const time1 = document.getElementById('time1').value;
        const time2 = document.getElementById('time2').value;
        // Add more time variables as needed

        // Validate form data...

        // Handle form submission (e.g., save data, close window, etc.)
        console.log("Medicine Name:", medicineName);
        console.log("Times Per Day:", timesPerDay);
        console.log("Time Points:", time1, time2);
        
        // Save data to localStorage or any other storage mechanism
        const medicationData = {
            medicineName: medicineName,
            timesPerDay: timesPerDay,
            time1: time1,
            time2: time2
            // Add more data fields as needed
        };
        localStorage.setItem('medicationData', JSON.stringify(medicationData));

        // Convert time strings to Date objects for comparison
        const time1Parts = time1.split(':');
        const time2Parts = time2.split(':');
        const time1Date = new Date();
        time1Date.setHours(parseInt(time1Parts[0], 10));
        time1Date.setMinutes(parseInt(time1Parts[1], 10));
        const time2Date = new Date();
        time2Date.setHours(parseInt(time2Parts[0], 10));
        time2Date.setMinutes(parseInt(time2Parts[1], 10));

        // Check current time against time points
        setInterval(function() {
            const currentTime = new Date();
            if (currentTime.getHours() === time1Date.getHours() && currentTime.getMinutes() === time1Date.getMinutes()) {
                showNotification(medicineName);
            }
            if (currentTime.getHours() === time2Date.getHours() && currentTime.getMinutes() === time2Date.getMinutes()) {
                showNotification(medicineName);
            }
            // Add more checks for additional time points as needed
        }, 60000); // Check every minute

        // Close the window after saving data and setting up the reminder
        window.close(); // This will close the window
    });
});

function showNotification(medicineName) {
    // Check if the browser supports the Notification API
    if (!("Notification" in window)) {
        alert("This browser does not support desktop notifications");
    } else if (Notification.permission === "granted") {
        // If permission is already granted, show the notification
        new Notification("Medication Reminder", {
            body: "Time to take your " + medicineName + "!",
            icon: "notification_icon.png" // You can provide an icon URL here
        });
    } else if (Notification.permission !== "denied") {
        // Request permission from the user
        Notification.requestPermission().then(function(permission) {
            if (permission === "granted") {
                // If permission is granted after request, show the notification
                new Notification("Medication Reminder", {
                    body: "Time to take your " + medicineName + "!",
                    icon: "notification_icon.png" // You can provide an icon URL here
                });
            }
        });
    }
}
