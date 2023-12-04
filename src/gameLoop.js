import Player from "./player";
import Ship from "./ship";

export const User = new Player();
export const AI = new Player();

User.carrier = new Ship(5, "C");
User.battleship = new Ship(4, "B");
User.destroyer = new Ship(3, "D");
User.submarine = new Ship(3, "S");
User.patrolBoat = new Ship(2, "P");

AI.carrier = new Ship(5, "C");
AI.battleship = new Ship(4, "B");
AI.destroyer = new Ship(3, "D");
AI.submarine = new Ship(3, "S");
AI.patrolBoat = new Ship(2, "P");

User.gameBoard.placeShip([6, 5], User.carrier, "X");
User.gameBoard.placeShip([1, 3], User.battleship, "Y");
User.gameBoard.placeShip([7, 2], User.destroyer, "Y");
User.gameBoard.placeShip([2, 5], User.submarine, "X");
User.gameBoard.placeShip([0, 1], User.patrolBoat, "Y");

AI.gameBoard.placeShip([0, 6], AI.carrier, "Y");
AI.gameBoard.placeShip([6, 8], AI.battleship, "Y");
AI.gameBoard.placeShip([3, 0], AI.destroyer, "X");
AI.gameBoard.placeShip([6, 2], AI.submarine, "X");
AI.gameBoard.placeShip([0, 1], AI.patrolBoat, "Y");

export function turn(y, x) {
	AI.gameBoard.receiveAttack([y, x]);
	AI.attack();
	const enemyAttack = AI.attackArray[AI.attackArray.length - 1];
	User.gameBoard.receiveAttack(enemyAttack);
	return enemyAttack;
}
