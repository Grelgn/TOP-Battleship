import { shipArray } from "./ship";

const attackArray = [];
const sunkArray = [];

export default class GameBoard {
	constructor() {
		this.array = [
			[" ", " ", " ", " ", " ", " ", " ", " ", " ", " "],
			[" ", " ", " ", " ", " ", " ", " ", " ", " ", " "],
			[" ", " ", " ", " ", " ", " ", " ", " ", " ", " "],
			[" ", " ", " ", " ", " ", " ", " ", " ", " ", " "],
			[" ", " ", " ", " ", " ", " ", " ", " ", " ", " "],
			[" ", " ", " ", " ", " ", " ", " ", " ", " ", " "],
			[" ", " ", " ", " ", " ", " ", " ", " ", " ", " "],
			[" ", " ", " ", " ", " ", " ", " ", " ", " ", " "],
			[" ", " ", " ", " ", " ", " ", " ", " ", " ", " "],
			[" ", " ", " ", " ", " ", " ", " ", " ", " ", " "],
		];
	}

	placeShip(coords, ship, axis) {
		const y = coords[0];
		const x = coords[1];
		if ((ship.length + y > 10 && axis === "Y") || (ship.length + x > 10 && axis === "X")) return;
		if (axis === "X") {
			for (let i = x; i < x + ship.length; i++) {
				if (this.checkPlacement(y, i) === false) return;
			}
			for (let i = x; i < x + ship.length; i++) {
				this.array[y][i] = ship.ID;
			}
		} else if (axis === "Y") {
			for (let i = y; i < y + ship.length; i++) {
				if (this.checkPlacement(i, x) === false) return;
			}
			for (let i = y; i < y + ship.length; i++) {
				this.array[i][x] = ship.ID;
			}
		}
	}

	checkPlacement(y, x) {
		for (let i = y - 1; i < y + 2; i++) {
			if (typeof this.array[i] === "undefined") {
				i++;
				if (typeof this.array[i] === "undefined") {
					break;
				}
			}
			for (let j = x - 1; j < x + 2; j++) {
				if (typeof this.array[i][j] === "undefined") {
					j++;
					if (typeof this.array[i][j] === "undefined") {
						break;
					}
				}
				if (this.array[i][j] !== " ") return false;
			}
		}
		return true;
	}

	receiveAttack(coords) {
		for (let i = 0; i < attackArray.length; i++) {
			if (attackArray[i][0] === coords[0] && attackArray[i][1] === coords[1]) return;
		}
		attackArray.push(coords);
		const y = coords[0];
		const x = coords[1];
		if (this.array[y][x] !== " ") {
			const shipID = this.array[y][x];
			for (let i = 0; i < shipArray.length; i++) {
				if (shipArray[i].ID === shipID) {
					shipArray[i].hit();
				}
				if (shipArray[i].sunk === true) {
					sunkArray.push(shipArray[i]);
				}
			}
		} else {
			this.array[y][x] = "X";
		}
		if (sunkArray.length === shipArray.length) {
			this.allShipsSank = true;
		}
	}
}
