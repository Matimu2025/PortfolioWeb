// JS Code for the scroll to top arrow - Updated
document.addEventListener('DOMContentLoaded', function() {
    const backToTopButton = document.querySelector('.back-to-top');
    
    if (!backToTopButton) {
        console.error('Back to top button not found!');
        return;
    }
    
    // Show button when scrolled down on ALL screen sizes
    window.addEventListener('scroll', function() {
        if (window.pageYOffset > 300) {
            backToTopButton.classList.add('show');
        } else {
            backToTopButton.classList.remove('show');
        }
    });


    backToTopButton.addEventListener('click', function(e) {
        e.preventDefault();
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
    
    // Initial check in case page is loaded scrolled down
    if (window.pageYOffset > 300) {
        backToTopButton.classList.add('show');
    }
});