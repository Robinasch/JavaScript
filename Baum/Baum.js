const canvas = document.getElementById('treeCanvas');
const ctx = canvas.getContext('2d');

const treeHeight = 500;
const treeWidth = 300;
const trunkWidth = 40;
const trunkHeight = 60;
const colors = ['green', '#006400', '#228B22', 'red', 'yellow'];


function getRandomTreeColor() {
  return colors[Math.floor(Math.random() * colors.length)];
}

function drawTree() {
  const width = canvas.width;
  const height = canvas.height;
  const centerX = width / 2;
  const bottomY = height - trunkHeight;

  for (let y = treeHeight; y > 0; y--) {
    const rowWidth = Math.floor(treeWidth * (y / treeHeight));
    const startX = Math.floor(centerX - rowWidth / 2);

    for (let x = 0; x < rowWidth; x++) {
      ctx.fillStyle = getRandomTreeColor();
      ctx.fillRect(startX + x, bottomY - (treeHeight - y), 1, 1);
    }
  }

  ctx.fillStyle = 'brown';
  ctx.fillRect(centerX - trunkWidth / 2, bottomY, trunkWidth, trunkHeight);
}

function animateTree() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  drawTree();
  setTimeout(() => requestAnimationFrame(animateTree), 100);
}

animateTree();
