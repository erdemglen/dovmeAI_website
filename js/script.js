document.addEventListener('DOMContentLoaded', function() {
    const modal = document.getElementById('imageModal');
    const modalImage = document.getElementById('modalImage');
    const closeButton = document.getElementsByClassName('close-button')[0];
    const featureItems = document.querySelectorAll('.feature-item img');

    featureItems.forEach(item => {
        item.addEventListener('click', function() {
            modal.style.display = 'block';
            modalImage.src = this.src; // Use the same image for now
        });
    });

    closeButton.addEventListener('click', function() {
        modal.style.display = 'none';
    });

    modal.addEventListener('click', function(event) {
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    });
});
