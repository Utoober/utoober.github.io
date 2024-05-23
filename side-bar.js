document.addEventListener("DOMContentLoaded", function() {
    const menuIcon = document.querySelector(".menu-icon");
    const sidebar = document.querySelector(".sidebar");
    const container = document.querySelector(".container");

    menuIcon.onclick = function() {
        const screenWidth = window.innerWidth;
        
        if (screenWidth <= 900) {
            // Mobile behavior: toggle the full-screen sidebar
            sidebar.classList.toggle("full-screen-sidebar");
        } else {
            // Desktop behavior: toggle small and large sidebar
            sidebar.classList.toggle("small-sidebar");
            container.classList.toggle("large-container");
        }
    };
});
