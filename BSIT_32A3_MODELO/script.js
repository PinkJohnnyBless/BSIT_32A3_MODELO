document.addEventListener("DOMContentLoaded", function() {
    // Example: Smooth scroll for navigation
    const links = document.querySelectorAll("a");
    links.forEach(link => {
        link.addEventListener("click", function(event) {
            if (this.hash !== "") {
                event.preventDefault();

                const target = document.querySelector(this.hash);
                window.scrollTo({
                    top: target.offsetTop - 50,
                    behavior: "smooth"
                });
            }
        });
    });
});
