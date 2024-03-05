// renderer.js (from the welcome page)

document.addEventListener("DOMContentLoaded", function() {
    const hospitalNameInput = document.getElementById("hospital-name-input");
    const enterButton = document.getElementById("enter-button");
    const errorMessage = document.createElement("div");
    errorMessage.textContent = "A name is required";
    errorMessage.classList.add("error-message");

    enterButton.addEventListener("click", function() {
        const hospitalName = hospitalNameInput.value.trim();
        if (hospitalName === "") {
            hospitalNameInput.parentNode.insertBefore(errorMessage, hospitalNameInput.nextSibling);
        } else {
            // Proceed to the patient database page with the hospital name
            window.location.href = `file:///D:/Software%20and%20Stuff/Service%20Learning/V4.0/Patient%20Database/index.html?hospitalName=${encodeURIComponent(hospitalName)}`;
        }
    });

    hospitalNameInput.addEventListener("input", function() {
        errorMessage.remove();
    });
});
