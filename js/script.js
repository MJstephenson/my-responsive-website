
// code for the toggle hamburger menu for mobile screen
function toggleMenu() {
    var navLinks = document.querySelector('.nav-links');
    if (navLinks) {
        navLinks.style.display = navLinks.style.display === 'flex' ? 'none' : 'flex';
    }
}
//get the month, date, and year for the instagram section
// Create a new Date object for the current date and time
const instadate = new Date();
// Array of month names
const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
// Gets the current month as text
const monthText = months[instadate.getMonth()];
// Gets the current date in numbers
const dateNumber = instadate.getDate();
// Gets the current year
const year = instadate.getFullYear();
// Combines the month, date, and year in this format
const dateString = `${monthText} ${dateNumber}, ${year}`;
// Inserts the date string into the <span> tag with id="date"
document.getElementById("date").innerText = dateString;

// Get the current year for the footer
document.getElementById('currentYear').textContent = new Date().getFullYear();
