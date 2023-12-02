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
			for (let i = x; i < x + ship.length; i += 1) {
				if (this.checkPlacement(y, i) === false) return;
			}
			for (let i = x; i < x + ship.length; i += 1) {
				this.array[y][i] = ship.ID;
			}
		} else if (axis === "Y") {
			for (let i = y; i < y + ship.length; i += 1) {
				if (this.checkPlacement(i, x) === false) return;
			}
			for (let i = y; i < y + ship.length; i += 1) {
				this.array[i][x] = ship.ID;
			}
		}
	}

	checkPlacement(y, x) {
		for (let i = y - 1; i < y + 2; i += 1) {
			if (typeof this.array[i] === "undefined") {
				i += 1;
				if (typeof this.array[i] === "undefined") {
					break;
				}
			}
			for (let j = x - 1; j < x + 2; j += 1) {
				if (typeof this.array[i][j] === "undefined") {
					j += 1;
					if (typeof this.array[i][j] === "undefined") {
						break;
					}
				}
				if (this.array[i][j] !== " ") return false;
			}
		}
		return true;
	}
}
