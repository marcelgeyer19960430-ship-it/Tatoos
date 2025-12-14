// Placeholder for interactivity
// Example: Shuffle gallery items
const shuffleBtn = document.getElementById('shuffle');
const grid = document.querySelector('.grid');

if (shuffleBtn && grid) {
  shuffleBtn.addEventListener('click', () => {
    const items = Array.from(grid.children);
    items.sort(() => Math.random() - 0.5);
    items.forEach(item => grid.appendChild(item));
  });
}
// Placeholder for interactivity
// Example: Shuffle gallery items
const shuffleBtn = document.getElementById('shuffle');
const grid = document.querySelector('.grid');

if (shuffleBtn && grid) {
  shuffleBtn.addEventListener('click', () => {
    const items = Array.from(grid.children);
    items.sort(() => Math.random() - 0.5);
    items.forEach(item => grid.appendChild(item));
  });
}
