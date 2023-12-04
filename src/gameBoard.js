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
		this.shipArray = [];
		this.attackArray = [];
		this.sunkArray = [];
		this.allShipsSank = false;
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
		for (let i = 0; i < this.attackArray.length; i++) {
			if (this.attackArray[i][0] === coords[0] && this.attackArray[i][1] === coords[1]) return;
		}
		this.attackArray.push(coords);
		const y = coords[0];
		const x = coords[1];
		if (this.array[y][x] !== " ") {
			const shipID = this.array[y][x];
			// for (let i = 0; i < this.shipArray.length; i++) {
			// For some reason using the for loop above instead of forEach caused an extremely weird bug
			this.shipArray.forEach((element) => {
				if (element.ID === shipID) {
					element.hit();
				}
				if (element.sunk === true) {
					for (let j = 0; j < this.sunkArray.length; j++) {
						if (this.sunkArray[j] === element) return;
					}
					this.sunkArray.push(element);
					if (this.sunkArray.length === this.shipArray.length) {
						this.allShipsSank = true;
					}
				}
			});
		} else {
			this.array[y][x] = "X";
		}
	}
}
