
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

    // Create cat image
    const img = document.createElement('img');
    img.id = 'cat-kiss-img';
    img.src = 'cat.png'; // Local cat kissing image
    img.alt = 'Cat kissing';
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

    // Add text below the cat image
    const flowerText = document.createElement('div');
    flowerText.textContent = "Here's a flower for the flower";
    flowerText.style.marginTop = '18px';
    flowerText.style.fontSize = '1.15em';
    flowerText.style.fontWeight = '500';
    flowerText.style.color = '#a8005a';
    flowerText.style.textAlign = 'center';
    flowerText.style.fontFamily = 'inherit';

    content.appendChild(img);
    content.appendChild(flowerText);
    modal.appendChild(content);

    // Close modal and remove blur when image or modal background is clicked
    modal.addEventListener('click', function (e) {
        if (e.target === modal || e.target === img) {
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
