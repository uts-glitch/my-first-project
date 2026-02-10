
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

    // Create cat image
    const img = document.createElement('img');
    img.id = 'cat-kiss-img';
    img.src = 'cat.png'; // Local cat kissing image
    img.alt = 'Cat kissing';
    img.style.maxWidth = '320px';
    img.style.borderRadius = '24px';
    img.style.boxShadow = '0 4px 24px rgba(255,105,180,0.25)';
    img.style.background = '#fff';
    img.style.padding = '12px';
    img.style.cursor = 'pointer';
    img.style.transition = 'transform 0.2s';

    // Close modal and remove blur when image or modal background is clicked
    modal.addEventListener('click', function (e) {
        if (e.target === modal || e.target === img) {
            modal.remove();
            document.querySelector('.main-box').classList.remove('blurred');
        }
    });

    modal.appendChild(img);

    // Add text below the cat image
    const flowerText = document.createElement('div');
    flowerText.textContent = 'Here a flower for the flower';
    flowerText.style.marginTop = '18px';
    flowerText.style.fontSize = '1.15em';
    flowerText.style.fontWeight = '500';
    flowerText.style.color = '#a8005a';
    flowerText.style.textAlign = 'center';
    flowerText.style.fontFamily = 'inherit';
    modal.appendChild(flowerText);

    document.body.appendChild(modal);
});

document.querySelector('.no-btn').addEventListener('click', function () {
    alert('Maybe next time!');
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
