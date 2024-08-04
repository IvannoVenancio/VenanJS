const canvas = document.getElementById('linesCanvas');
const ctx = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

function drawLine(x1, y1, x2, y2, color) {
  ctx.strokeStyle = color;
  ctx.lineWidth = 0.5;
  ctx.beginPath();
  ctx.moveTo(x1, y1);
  ctx.lineTo(x2, y2);
  ctx.stroke();
}

function drawLines() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  for (let i = 0; i < 50; i++) {
    const x1 = getRandomInt(0, canvas.width);
    const y1 = getRandomInt(0, canvas.height);
    const x2 = getRandomInt(0, canvas.width);
    const y2 = getRandomInt(0, canvas.height);
    drawLine(x1, y1, x2, y2, 'rgba(255, 255, 255, 0.1)');
  }
}

setInterval(drawLines, 1000);

window.addEventListener('resize', () => {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  drawLines();
});

drawLines();
