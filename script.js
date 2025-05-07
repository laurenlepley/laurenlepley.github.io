document.addEventListener('DOMContentLoaded', function () {
    // Log to confirm the script is working
    console.log('JavaScript loaded');

    // Select all checkboxes
    const checkbox = document.querySelectorAll('input[type="checkbox"]');

    // Loop through checkboxes and add event listeners
    checkbox.forEach((cb, index) => {
        cb.addEventListener('click', function() {
            switch (index) {
                case 0:
                    alert("Watercolor paint is a type of paint characterized by its transparent nature, achieved through the use of pigments suspended in a water.");
                    break;
                case 1:
                    alert("Acrylic paint is water-based fast-drying paint.");
                    break;
                case 2:
                    alert("Oil paint involves the procedure of painting with pigments combined with a drying oil as the binder. **This medium usually takes the longest as the paint takes weeks to dry completely.**");
                    break;
                case 3:
                    alert("Graphite pencils are the typical drawing medium and most commonly used for sketches.");
                    break;
                case 4:
                    alert("Colored pencils are similar to graphite pencils, but they are pigmented to add a greater intensity and range of value.");
                    break;
                case 5:
                    alert("Charcoal is a dry drawing material made from burnt wood, used to create drawings and sketches.");
                    break;
            }
        });
    });

    // Select the form element after DOM is fully loaded
    const form = document.querySelector('#OrderForm');
    if (!form) {
        console.error('Form element not found');
        return;  // Stop if form is not found
    }

    // Handle form submission (Submit button)
    form.addEventListener('submit', function(event) {
        event.preventDefault();  // Prevent the form from submitting for demo

        const clickedButton = event.submitter; // Get the button that triggered the event

        if (clickedButton && clickedButton.name === 'submitButton') {
            alert('Thank you for submitting!');
            console.log('Thank you for submitting!');
        }
    });

    // Handle reset button click (Reset event)
    form.addEventListener('reset', function(event) {
        alert('The page was reset.');
        console.log('The page was reset.');
    });
});

// Function to check if dark mode is enabled (for demonstration purposes)
function checkDarkMode() {
    // Let's assume we check for a specific condition, like a button click, or check localStorage for dark mode preference
    let isDarkMode = localStorage.getItem('darkMode') === 'true'; // For example, if darkMode is set to 'true' in localStorage

    // Target the header element
    const header = document.getElementById('header');

    // Apply styles based on the condition
    if (isDarkMode) {
        // If dark mode is true, set the background color to dark
        header.style.backgroundColor = '#333'; // Dark background for header
        header.style.color = '#fff'; // White text for header
    } else {
        // If dark mode is false, set the background color to light
        header.style.backgroundColor = 'rgb(195, 232, 234)'; // Light background (default from CSS)
        header.style.color = '#000'; // Black text for header
    }
}
