const noBtn = document.getElementById('noBtn');
const yesBtn = document.getElementById('yesBtn');
const container = document.getElementById('prankContainer');

noBtn.addEventListener('mouseover', moveButton);
noBtn.addEventListener('touchstart', (e) => {
    e.preventDefault();
    moveButton();
});

function moveButton() {
    if (!noBtn.classList.contains('escape')) {
        noBtn.classList.add('escape');
    }

    // Get container dimensions
    const containerRect = container.getBoundingClientRect();
    const buttonWidth = noBtn.offsetWidth;
    const buttonHeight = noBtn.offsetHeight;

    // Calculate max positions within container (relative to container)
    // We want it to stay inside the glass-frame
    const padding = 20;
    const maxWidth = containerRect.width - buttonWidth - (padding * 2);
    const maxHeight = containerRect.height - buttonHeight - (padding * 2);

    // Initial position logic or random jitter
    const randomX = Math.floor(Math.random() * maxWidth) + padding;
    const randomY = Math.floor(Math.random() * maxHeight) + padding;

    // Apply relative to the container which has the wrapper
    noBtn.style.left = `${randomX}px`;
    noBtn.style.top = `${randomY}px`;
}

yesBtn.addEventListener('click', () => {
    window.location.href = 'knew-it.html';
});
