// JavaScript can be added here for dynamic interactions if needed
document.addEventListener('DOMContentLoaded', function() {
    // Get all the card elements
    var cards = document.querySelectorAll('.card');

    // Add click event listener to each card
    cards.forEach(function(card, index) {
        card.addEventListener('click', function() {
            // Open the corresponding modal
            var modal = document.getElementById('modal-day' + (index + 1));
            if (modal) {
                modal.style.display = "block";
            }
        });
    });

    // Get all the close buttons
    var closeButtons = document.querySelectorAll('.close-button');

    // Add click event listener to each close button
    closeButtons.forEach(function(btn) {
        btn.addEventListener('click', function() {
            var modal = this.closest('.modal');
            if (modal) {
                modal.style.display = "none";
            }
        });
    });

    // Close the modal if the user clicks outside of it
    window.onclick = function(event) {
        if (event.target.className === 'modal') {
            event.target.style.display = "none";
        }
    };
});