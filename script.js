
document.querySelector('.yes-btn').addEventListener('click', function () {
    // Remove any existing modal
    const existingModal = document.getElementById('cat-modal');
    if (existingModal) existingModal.remove();

    // Add blur to main content
    document.querySelector('.main-box').classList.add('blurred');

    // Create modal overlay
    const modal = document.createElement('div');
    modal.id = 'cat-modal';
    modal.className = 'cat-modal';
    modal.style.position = 'fixed';
    modal.style.top = '0';
    modal.style.left = '0';
    modal.style.width = '100vw';
    modal.style.height = '100vh';
    modal.style.display = 'flex';
    modal.style.alignItems = 'center';
    modal.style.justifyContent = 'center';
    modal.style.background = 'rgba(255, 105, 180, 0.18)';
    modal.style.zIndex = '999';

    // Create a flex column container for image and text
    const content = document.createElement('div');
    content.style.display = 'flex';
    content.style.flexDirection = 'column';
    content.style.alignItems = 'center';
    content.style.justifyContent = 'center';

    // Create flower GIF image
    const img = document.createElement('img');
    img.id = 'flower-img';
    img.src = 'HandingFlower.gif'; // Local handing flower GIF
    img.alt = 'Handing flower';
    img.style.maxWidth = '90vw';
    img.style.maxHeight = '60vh';
    img.style.width = '100%';
    img.style.height = 'auto';
    img.style.borderRadius = '24px';
    img.style.boxShadow = '0 4px 24px rgba(255,105,180,0.25)';
    img.style.background = '#fff';
    img.style.padding = '12px';
    img.style.cursor = 'pointer';
    img.style.transition = 'transform 0.2s';

    // Create a constrained wrapper to center and size both GIFs
    const imgWrapper = document.createElement('div');
    imgWrapper.style.position = 'relative';
    imgWrapper.style.display = 'flex';
    imgWrapper.style.alignItems = 'center';
    imgWrapper.style.justifyContent = 'center';
    imgWrapper.style.width = '90vw';
    imgWrapper.style.maxWidth = '720px';
    imgWrapper.style.height = '60vh';
    imgWrapper.style.maxHeight = '72vh';
    imgWrapper.style.overflow = 'hidden';
    imgWrapper.style.borderRadius = '16px';
    imgWrapper.style.background = '#fff';
    imgWrapper.style.padding = '8px';

    // Style the flower image for crossfade (fills wrapper while preserving aspect)
    img.style.position = 'absolute';
    img.style.top = '0';
    img.style.left = '0';
    img.style.width = '100%';
    img.style.height = '100%';
    img.style.objectFit = 'contain';
    img.style.zIndex = '1';
    img.style.transition = 'opacity 2.2s ease';
    img.style.opacity = '1';
    img.style.borderRadius = '12px';

    const kissImg = document.createElement('img');
    kissImg.id = 'kiss-img';
    kissImg.src = 'Kiss.gif';
    kissImg.alt = 'Kiss';
    kissImg.style.position = 'absolute';
    kissImg.style.top = '0';
    kissImg.style.left = '0';
    kissImg.style.width = '100%';
    kissImg.style.height = '100%';
    kissImg.style.objectFit = 'contain';
    kissImg.style.zIndex = '2';
    kissImg.style.transition = 'opacity 2.2s ease';
    kissImg.style.opacity = '0';
    kissImg.style.borderRadius = '12px';

    // Place both images in the wrapper (kiss overlays flower)
    imgWrapper.appendChild(img);
    imgWrapper.appendChild(kissImg);
    content.appendChild(imgWrapper);
    modal.appendChild(content);

    // Start crossfade after a short delay: flower fades out, kiss fades in
    setTimeout(function () {
        img.style.opacity = '0';
        kissImg.style.opacity = '1';
    }, 600);

    // Close modal and remove blur when image or modal background is clicked
    modal.addEventListener('click', function (e) {
        if (e.target === modal || e.target === img || e.target === kissImg) {
            modal.remove();
            document.querySelector('.main-box').classList.remove('blurred');
        }
    });

    document.body.appendChild(modal);
});

document.querySelector('.no-btn').addEventListener('click', function () {
    // Show the imported GIF for 3 seconds, then refresh the page
    const existing = document.getElementById('no-gif-modal');
    if (existing) existing.remove();

    // Add blur to main content
    const mainBox = document.querySelector('.main-box');
    if (mainBox) mainBox.classList.add('blurred');

    const modal = document.createElement('div');
    modal.id = 'no-gif-modal';
    modal.style.position = 'fixed';
    modal.style.top = '0';
    modal.style.left = '0';
    modal.style.width = '100vw';
    modal.style.height = '100vh';
    modal.style.display = 'flex';
    modal.style.alignItems = 'center';
    modal.style.justifyContent = 'center';
    modal.style.background = 'rgba(0,0,0,0.28)';
    modal.style.zIndex = '9999';

    const img = document.createElement('img');
    img.src = 'Nooo.gif';
    img.alt = 'No GIF';
    img.style.maxWidth = '90vw';
    img.style.maxHeight = '80vh';
    img.style.width = 'auto';
    img.style.height = 'auto';
    img.style.borderRadius = '12px';
    img.style.boxShadow = '0 8px 40px rgba(0,0,0,0.45)';

    modal.appendChild(img);
    document.body.appendChild(modal);

    // After 3 seconds refresh the page
    setTimeout(function () {
        location.reload();
    }, 3000);
});


const noBtn = document.querySelector('.no-btn');
const container = document.querySelector('.bordered-text');

function moveNoButton() {
    const btnRect = noBtn.getBoundingClientRect();
    const maxLeft = container.offsetWidth - btnRect.width;
    const maxTop = container.offsetHeight - btnRect.height;
    const left = Math.random() * maxLeft;
    const top = Math.random() * maxTop;
    noBtn.style.position = 'absolute';
    noBtn.style.left = left + 'px';
    noBtn.style.top = top + 'px';
}

// Move every time mouse enters or moves over the button
noBtn.addEventListener('mouseenter', moveNoButton);
noBtn.addEventListener('mousemove', moveNoButton);

// Reset position when mouse leaves the container
container.addEventListener('mouseleave', function () {
    noBtn.style.position = '';
    noBtn.style.left = '';
    noBtn.style.top = '';
});
