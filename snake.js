const board_border = 'black';
const board_background = "white";
const snake_col = 'lightblue';
const snake_border = 'darkblue';

let snake = [  
    {x: 200, y: 200},
    {x: 190, y: 200},
    {x: 180, y: 200},
    {x: 170, y: 200},
    {x: 160, y: 200}
];

// Horizontal velocity
let dx = 10;
// Vertical velocity
let dy = 0;

// Recupère Canvas 
const snakeboard = document.getElementById("gameCanvas");
// Retourne Un Context de dessin en 2 Dimension
const snakeboard_ctx = gameCanvas.getContext("2d");

// Commence le Jeu
main();


// Fonction appelée en boucle pour faire tourner le jeu.
function main() {
  setTimeout(function onTick() {
  clearCanvas();
  moveSnake();
  drawSnake();
  // Call main again
  main();
}, 100)
}

function clearCanvas() {
    //  Select the colour to fill the drawing
    snakeboard_ctx.fillStyle = board_background;
    //  Select the colour for the border of the canvas
    snakeboard_ctx.strokestyle = board_border;
    // Draw a "filled" rectangle to cover the entire canvas
    snakeboard_ctx.fillRect(0, 0, snakeboard.width, snakeboard.height);
    // Draw a "border" around the entire canvas
    snakeboard_ctx.strokeRect(0, 0, snakeboard.width, snakeboard.height);
  }

// Fonction qui dessine chaque partie du Snake
function drawSnakePart(snakePart)
{  
  snakeboard_ctx.fillStyle = 'lightblue';  
  snakeboard_ctx.strokestyle = 'darkblue';
  snakeboard_ctx.fillRect(snakePart.x, snakePart.y, 10, 10);  
  snakeboard_ctx.strokeRect(snakePart.x, snakePart.y, 10, 10);
}
 
/*Fonction qui dessine le Snake*/
function drawSnake() 
{  
  snake.forEach(drawSnakePart);
}

function moveSnake(){
  // Create the new Snake's head
  const head = {x: snake[0].x + dx, y: snake[0].y + dy};
  // Add the new head to the beginning of snake body
  snake.unshift(head);
  snake.pop();
}

