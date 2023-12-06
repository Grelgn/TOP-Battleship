import Player from "./player";
import Ship from "./ship";

export const User = new Player();
export const AI = new Player();

User.gameBoard.shipArray.push(new Ship(5, "C"));
User.gameBoard.shipArray.push(new Ship(4, "B"));
User.gameBoard.shipArray.push(new Ship(3, "D"));
User.gameBoard.shipArray.push(new Ship(3, "S"));
User.gameBoard.shipArray.push(new Ship(2, "P"));

AI.gameBoard.shipArray.push(new Ship(5, "C"));
AI.gameBoard.shipArray.push(new Ship(4, "B"));
AI.gameBoard.shipArray.push(new Ship(3, "D"));
AI.gameBoard.shipArray.push(new Ship(3, "S"));
AI.gameBoard.shipArray.push(new Ship(2, "P"));

let enemyPlaced = 0;
while (enemyPlaced < 5) {
	const randomY = Math.floor(Math.random() * 10);
	const randomX = Math.floor(Math.random() * 10);
	let randomAxis = Math.floor(Math.random() * 2);
	if (randomAxis < 1) randomAxis = "X";
	else randomAxis = "Y";
	if (AI.gameBoard.placeShip([randomY, randomX], AI.gameBoard.shipArray[enemyPlaced], randomAxis) === true) {
		enemyPlaced++;
	}
}

export function turn(y, x) {
	AI.gameBoard.receiveAttack([y, x]);
	AI.attack();
	const enemyAttack = AI.attackArray[AI.attackArray.length - 1];
	User.gameBoard.receiveAttack(enemyAttack);
	return enemyAttack;
}

export function checkSunkStatus() {
	if (AI.gameBoard.allShipsSank === true) return 1;
	if (User.gameBoard.allShipsSank === true) return 2;
}
