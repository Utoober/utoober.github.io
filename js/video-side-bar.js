document.addEventListener("DOMContentLoaded", function() {
    fetch('../pages/side-videos.html')
    .then(response => response.text())
    .then(data => {
        document.getElementById('right-sidebar').innerHTML = data;
    })
    .catch(error => console.error('Error fetching the side videos:', error));
});

