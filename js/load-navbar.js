// load-navbar.js
document.addEventListener("DOMContentLoaded", function() {
    fetch("../pages/navbar.html")
        .then(response => response.text())
        .then(data => {
            document.getElementById("navbar-placeholder").innerHTML = data;
        })
        .catch(error => console.error('Error loading the navbar:', error));
});
