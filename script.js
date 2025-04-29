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
                    alert("Realistic art aims to depict subjects as they appear in the real world with a high degree of accuracy and detail.");
                    break;
                case 1:
                    alert("Abstract art does not attempt to represent external reality, but seeks to achieve its effect using shapes, forms, colors, and textures.");
                    break;
                case 2:
                    alert("Surrealistic art is characterized by dreamlike imagery, illogical juxtapositions, and a focus on the unexpected.");
                    break;
                case 3:
                    alert("Expressionistic art often involves distorted forms, vivid colors, and vigorous brushstrokes to convey intense feelings.");
                    break;
                case 4:
                    alert("Romantic art is characterized by its emphasis on emotion, imagination, and the subjective experience over reason and objectivity.");
                    break;
                case 5:
                    alert("Baroque art is characterized by elaborate ornamentation, dramatic effects, and a sense of movement and tension, often conveying grandeur and opulence.");
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