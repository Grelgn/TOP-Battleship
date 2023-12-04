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

User.gameBoard.placeShip([6, 5], User.gameBoard.shipArray[0], "X");
User.gameBoard.placeShip([1, 3], User.gameBoard.shipArray[1], "Y");
User.gameBoard.placeShip([7, 2], User.gameBoard.shipArray[2], "Y");
User.gameBoard.placeShip([2, 5], User.gameBoard.shipArray[3], "X");
User.gameBoard.placeShip([0, 1], User.gameBoard.shipArray[4], "Y");

AI.gameBoard.placeShip([0, 6], AI.gameBoard.shipArray[0], "Y");
AI.gameBoard.placeShip([6, 8], AI.gameBoard.shipArray[1], "Y");
AI.gameBoard.placeShip([3, 0], AI.gameBoard.shipArray[2], "X");
AI.gameBoard.placeShip([6, 2], AI.gameBoard.shipArray[3], "X");
AI.gameBoard.placeShip([0, 1], AI.gameBoard.shipArray[4], "Y");

export function turn(y, x) {
	AI.gameBoard.receiveAttack([y, x]);
	AI.attack();
	const enemyAttack = AI.attackArray[AI.attackArray.length - 1];
	User.gameBoard.receiveAttack(enemyAttack);
	return enemyAttack;
}

export function checkSunkStatus() {
	if (User.gameBoard.allShipsSank === true || AI.gameBoard.allShipsSank === true) {
		console.log("Game Over!");
	}
}
