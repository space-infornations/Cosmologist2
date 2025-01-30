
    document.addEventListener("DOMContentLoaded", function() {
        // Show the button when the user scrolls down 100px
        window.onscroll = function() {
            var goToTopButton = document.getElementById("goToTop");
            if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
                goToTopButton.style.display = "block";
            } else {
                goToTopButton.style.display = "none";
            }
        };

        // Scroll to the top when the button is clicked
        document.getElementById("goToTop").onclick = function() {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        };
    });

