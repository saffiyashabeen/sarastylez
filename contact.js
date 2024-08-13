document.addEventListener("DOMContentLoaded", function() {
    const contactForm = document.getElementById("contactForm");
    const responseDiv = document.getElementById("response");

    contactForm.addEventListener("submit", function(event) {
        event.preventDefault();

        const name = document.getElementById("name").value;
        const email = document.getElementById("email").value;
        const message = document.getElementById("message").value;

        if (name.trim() === '' || email.trim() === '' || message.trim() === '') {
            responseDiv.innerHTML = "<p>Please fill out all fields.</p>";
            return;
        }
        responseDiv.innerHTML = "<p>Thank you for contacting us, " + name + "!</p>";
        contactForm.reset();
    });
});
