const container = document.getElementById('balloon-container');
const colors = ['#ff4d6d', '#ff758f', '#c9184a', '#ffb3c1', '#590d22'];

function createBalloon() {
  const balloonWrap = document.createElement('div');
  balloonWrap.className = 'balloon';

  // Create the heart part
  const heart = document.createElement('div');
  heart.className = 'heart';
  heart.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
  
  // Create the string part
  const string = document.createElement('div');
  string.className = 'string';

  balloonWrap.appendChild(heart);
  balloonWrap.appendChild(string);

  // Randomize Horizontal Position
  const startX = Math.random() * 100;
  balloonWrap.style.left = `${startX}vw`;

  // Randomize Size
  const scale = Math.random() * 0.7 + 0.5;
  balloonWrap.style.transform = `scale(${scale})`;

  // Randomize Speed
  const duration = Math.random() * 4 + 6; // 6 to 10 seconds

  container.appendChild(balloonWrap);

  // Animate upward and add wobble
  balloonWrap.animate([
    { bottom: '-150px', transform: `scale(${scale}) translateX(0)` },
    { bottom: '110vh', transform: `scale(${scale}) translateX(${Math.random() * 50 - 25}px)` }
  ], {
    duration: duration * 1000,
    easing: 'ease-in'
  }).onfinish = () => balloonWrap.remove();

  // Add CSS wobble class dynamically
  balloonWrap.style.animation = `wobble ${Math.random() * 2 + 2}s ease-in-out infinite`;
}

// Fire a new balloon every 500ms
setInterval(createBalloon, 500);