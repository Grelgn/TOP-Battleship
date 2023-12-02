import GameBoard from "./gameBoard";

export default class Player {
	constructor(name) {
		this.name = name;
		this.gameBoard = new GameBoard();
		this.attackArray = [];
	}

	attack() {
		const y = Math.floor(Math.random() * 10);
		const x = Math.floor(Math.random() * 10);
		for (let i = 0; i < this.attackArray.length; i++) {
			if (this.attackArray[i][0] === y && this.attackArray[i][1] === x) {
				this.attack();
				return;
			}
		}
        this.attackArray.push([y, x]);
	}
}
