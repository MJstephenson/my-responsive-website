
// code for the toggle hamburger menu for mobile screen
function toggleMenu() {
    var navLinks = document.querySelector('.nav-links');
    if (navLinks) {
        navLinks.style.display = navLinks.style.display === 'flex' ? 'none' : 'flex';
    }
}