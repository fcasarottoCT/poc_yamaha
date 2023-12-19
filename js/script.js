// Get the modal
const modal = document.getElementById('myModal');

// Get the close button inside the modal
const closeModal = document.getElementById('closeModal');

// When the close button is clicked, hide the modal
closeModal.addEventListener('click', function() {
    modal.style.display = 'none';
});

// Close the modal if the user clicks outside of it
window.addEventListener('click', function(event) {
    if (event.target === modal) {
        modal.style.display = 'none';
    }
});