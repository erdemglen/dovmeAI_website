document.addEventListener('DOMContentLoaded', function() {
    const modal = document.getElementById('imageModal');
    const modalImage = document.getElementById('modalImage');
    const closeButton = document.getElementsByClassName('close-button')[0];
    const prevButton = document.querySelector('.prev-btn');
    const nextButton = document.querySelector('.next-btn');
    const featureItems = document.querySelectorAll('.feature-item'); // Select the feature-item div

    let currentImageIndex = 0;
    let imagePaths = [];

    function displayImage(index) {
        modalImage.src = imagePaths[index];
        prevButton.style.display = (index === 0) ? 'none' : 'block';
        nextButton.style.display = (index === imagePaths.length - 1) ? 'none' : 'block';
    }

    featureItems.forEach(item => {
        item.addEventListener('click', function() {
            const imagesAttr = this.getAttribute('data-images');
            if (imagesAttr) {
                imagePaths = imagesAttr.split(',');
                currentImageIndex = 0;
                modal.style.display = 'block';
                displayImage(currentImageIndex);
            }
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

    prevButton.addEventListener('click', function() {
        if (currentImageIndex > 0) {
            currentImageIndex--;
            displayImage(currentImageIndex);
        }
    });

    nextButton.addEventListener('click', function() {
        if (currentImageIndex < imagePaths.length - 1) {
            currentImageIndex++;
            displayImage(currentImageIndex);
        }
    });
});
