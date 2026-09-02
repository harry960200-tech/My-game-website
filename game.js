game.js
function startGame() {
  const gameArea = document.getElementById("gameArea");

  gameArea.innerHTML = `
    <div style="font-size:60px;">🚗</div>
    <h2>Game Started! 🎮</h2>
    <p>Car Dodge game is ready.</p>
    <button onclick="location.reload()">Restart</button>
  `;
}
