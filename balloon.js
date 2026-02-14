const container = document.querySelector('.balloon-container');

const colors = [
  '#ff4d6d',
  '#ff85a1',
  '#ff99c8',
  '#ffccd5',
  '#c9184a',
  '#ff758f'
];

function createBalloon() {
  const balloon = document.createElement('div');
  balloon.classList.add('balloon');

  // Random position
  balloon.style.left = Math.random() * 100 + 'vw';

  // Random color
  balloon.style.background = colors[Math.floor(Math.random() * colors.length)];

  // Random size
  const size = Math.random() * 30 + 40;
  balloon.style.width = size + 'px';
  balloon.style.height = size * 1.2 + 'px';

  // Random animation duration
  const duration = Math.random() * 5 + 5;
  balloon.style.animationDuration = duration + 's';

  container.appendChild(balloon);

  // Remove balloon after animation
  setTimeout(() => {
    balloon.remove();
  }, duration * 1000);
}

// Create balloons continuously
setInterval(createBalloon, 800);
