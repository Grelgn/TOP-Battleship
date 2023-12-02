import GameBoard from "./gameBoard";
import Ship from "./ship";

const gameBoard = new GameBoard();
const battleship = new Ship(4, "B");
const destroyer = new Ship(3, "D");

test("Can place ships on the X axis", () => {
	gameBoard.placeShip([2, 4], battleship, "X");
	expect(gameBoard.array).toStrictEqual([
		[" ", " ", " ", " ", " ", " ", " ", " ", " ", " "],
		[" ", " ", " ", " ", " ", " ", " ", " ", " ", " "],
		[" ", " ", " ", " ", "B", "B", "B", "B", " ", " "],
		[" ", " ", " ", " ", " ", " ", " ", " ", " ", " "],
		[" ", " ", " ", " ", " ", " ", " ", " ", " ", " "],
		[" ", " ", " ", " ", " ", " ", " ", " ", " ", " "],
		[" ", " ", " ", " ", " ", " ", " ", " ", " ", " "],
		[" ", " ", " ", " ", " ", " ", " ", " ", " ", " "],
		[" ", " ", " ", " ", " ", " ", " ", " ", " ", " "],
		[" ", " ", " ", " ", " ", " ", " ", " ", " ", " "],
	]);
});

test("Can place ships on the Y axis", () => {
	gameBoard.placeShip([1, 1], destroyer, "Y");
	expect(gameBoard.array).toStrictEqual([
		[" ", " ", " ", " ", " ", " ", " ", " ", " ", " "],
		[" ", "D", " ", " ", " ", " ", " ", " ", " ", " "],
		[" ", "D", " ", " ", "B", "B", "B", "B", " ", " "],
		[" ", "D", " ", " ", " ", " ", " ", " ", " ", " "],
		[" ", " ", " ", " ", " ", " ", " ", " ", " ", " "],
		[" ", " ", " ", " ", " ", " ", " ", " ", " ", " "],
		[" ", " ", " ", " ", " ", " ", " ", " ", " ", " "],
		[" ", " ", " ", " ", " ", " ", " ", " ", " ", " "],
		[" ", " ", " ", " ", " ", " ", " ", " ", " ", " "],
		[" ", " ", " ", " ", " ", " ", " ", " ", " ", " "],
	]);
});

test("Can't place ships outside the game board", () => {
	gameBoard.placeShip([8, 0], destroyer, "Y");
	expect(gameBoard.array).toStrictEqual([
		[" ", " ", " ", " ", " ", " ", " ", " ", " ", " "],
		[" ", "D", " ", " ", " ", " ", " ", " ", " ", " "],
		[" ", "D", " ", " ", "B", "B", "B", "B", " ", " "],
		[" ", "D", " ", " ", " ", " ", " ", " ", " ", " "],
		[" ", " ", " ", " ", " ", " ", " ", " ", " ", " "],
		[" ", " ", " ", " ", " ", " ", " ", " ", " ", " "],
		[" ", " ", " ", " ", " ", " ", " ", " ", " ", " "],
		[" ", " ", " ", " ", " ", " ", " ", " ", " ", " "],
		[" ", " ", " ", " ", " ", " ", " ", " ", " ", " "],
		[" ", " ", " ", " ", " ", " ", " ", " ", " ", " "],
	]);
});

test("Can't place ships on top of other ships", () => {
	gameBoard.placeShip([2, 6], destroyer, "X");
	expect(gameBoard.array).toStrictEqual([
		[" ", " ", " ", " ", " ", " ", " ", " ", " ", " "],
		[" ", "D", " ", " ", " ", " ", " ", " ", " ", " "],
		[" ", "D", " ", " ", "B", "B", "B", "B", " ", " "],
		[" ", "D", " ", " ", " ", " ", " ", " ", " ", " "],
		[" ", " ", " ", " ", " ", " ", " ", " ", " ", " "],
		[" ", " ", " ", " ", " ", " ", " ", " ", " ", " "],
		[" ", " ", " ", " ", " ", " ", " ", " ", " ", " "],
		[" ", " ", " ", " ", " ", " ", " ", " ", " ", " "],
		[" ", " ", " ", " ", " ", " ", " ", " ", " ", " "],
		[" ", " ", " ", " ", " ", " ", " ", " ", " ", " "],
	]);
});

test("Can't place ships next to other ships", () => {
	gameBoard.placeShip([4, 0], battleship, "X");
	gameBoard.placeShip([3, 8], battleship, "Y");
	expect(gameBoard.array).toStrictEqual([
		[" ", " ", " ", " ", " ", " ", " ", " ", " ", " "],
		[" ", "D", " ", " ", " ", " ", " ", " ", " ", " "],
		[" ", "D", " ", " ", "B", "B", "B", "B", " ", " "],
		[" ", "D", " ", " ", " ", " ", " ", " ", " ", " "],
		[" ", " ", " ", " ", " ", " ", " ", " ", " ", " "],
		[" ", " ", " ", " ", " ", " ", " ", " ", " ", " "],
		[" ", " ", " ", " ", " ", " ", " ", " ", " ", " "],
		[" ", " ", " ", " ", " ", " ", " ", " ", " ", " "],
		[" ", " ", " ", " ", " ", " ", " ", " ", " ", " "],
		[" ", " ", " ", " ", " ", " ", " ", " ", " ", " "],
	]);
});

test("Can place ships at the edges of the game board", () => {
	gameBoard.placeShip([7, 0], destroyer, "Y");
	gameBoard.placeShip([0, 7], destroyer, "X");
	expect(gameBoard.array).toStrictEqual([
		[" ", " ", " ", " ", " ", " ", " ", "D", "D", "D"],
		[" ", "D", " ", " ", " ", " ", " ", " ", " ", " "],
		[" ", "D", " ", " ", "B", "B", "B", "B", " ", " "],
		[" ", "D", " ", " ", " ", " ", " ", " ", " ", " "],
		[" ", " ", " ", " ", " ", " ", " ", " ", " ", " "],
		[" ", " ", " ", " ", " ", " ", " ", " ", " ", " "],
		[" ", " ", " ", " ", " ", " ", " ", " ", " ", " "],
		["D", " ", " ", " ", " ", " ", " ", " ", " ", " "],
		["D", " ", " ", " ", " ", " ", " ", " ", " ", " "],
		["D", " ", " ", " ", " ", " ", " ", " ", " ", " "],
	]);
});

test("Records the coordinates of the missed shot", () => {
	gameBoard.receiveAttack([5, 2]);
	expect(gameBoard.array).toStrictEqual([
		[" ", " ", " ", " ", " ", " ", " ", "D", "D", "D"],
		[" ", "D", " ", " ", " ", " ", " ", " ", " ", " "],
		[" ", "D", " ", " ", "B", "B", "B", "B", " ", " "],
		[" ", "D", " ", " ", " ", " ", " ", " ", " ", " "],
		[" ", " ", " ", " ", " ", " ", " ", " ", " ", " "],
		[" ", " ", "X", " ", " ", " ", " ", " ", " ", " "],
		[" ", " ", " ", " ", " ", " ", " ", " ", " ", " "],
		["D", " ", " ", " ", " ", " ", " ", " ", " ", " "],
		["D", " ", " ", " ", " ", " ", " ", " ", " ", " "],
		["D", " ", " ", " ", " ", " ", " ", " ", " ", " "],
	]);
});

test("Registers hit on ship", () => {
	gameBoard.receiveAttack([2, 1]);
	expect(destroyer.hits).toBe(1);
});

test("Can't hit the same coordinates more than once", () => {
	gameBoard.receiveAttack([2, 1]);
	expect(destroyer.hits).toBe(1);
});

test("All ships have been sunk", () => {
	gameBoard.receiveAttack([1, 1]);
	gameBoard.receiveAttack([3, 1]);
	gameBoard.receiveAttack([2, 4]);
	gameBoard.receiveAttack([2, 5]);
	gameBoard.receiveAttack([2, 6]);
	gameBoard.receiveAttack([2, 7]);
	expect(gameBoard.allShipsSank).toBeTruthy();
});
