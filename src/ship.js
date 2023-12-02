export default class Ship {
	constructor(length, ID) {
        this.ID = ID;
		this.length = length;
		this.hits = 0;
		this.sunk = false;
	}

	hit() {
		if (this.hits < this.length) this.hits += 1;
		if (this.hits === this.length) {
			this.isSunk();
		}
	}

	isSunk() {
		this.sunk = true;
	}
}
