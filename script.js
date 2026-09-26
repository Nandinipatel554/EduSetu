// ================= GET STARTED BUTTON =================

const getStartedButtons = document.querySelectorAll(
    ".primary-btn, .signup-btn"
);

getStartedButtons.forEach(function(button) {
    button.addEventListener("click", function() {
        document.querySelector("#features").scrollIntoView({
            behavior: "smooth"
        });
    });
});


// ================= EXPLORE FEATURES =================

const exploreButton = document.querySelector(".secondary-btn");

exploreButton.addEventListener("click", function() {
    document.querySelector("#features").scrollIntoView({
        behavior: "smooth"
    });
});


// ================= LOGIN BUTTON =================

const loginButton = document.querySelector(".login-btn");

loginButton.addEventListener("click", function() {
    window.location.href = "login.html";
});


// ================= JOIN EDusetU =================

const joinButton = document.querySelector(".cta-section .primary-btn");

joinButton.addEventListener("click", function() {
    alert("Welcome to EduSetu! Registration will be available soon.");
});