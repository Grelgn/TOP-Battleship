import { User, AI, turn, checkSunkStatus } from "./gameLoop";

function populateUser() {
	const userBoardIDs = [];

	const userBoardY = document.querySelectorAll(".your-board > div");
	userBoardY.forEach((Y) => {
		const userBoardX = Y.querySelectorAll("div");
		userBoardX.forEach((X) => {
			userBoardIDs.push(X.id);
		});
	});

	for (let y = 0; y < User.gameBoard.array.length; y++) {
		for (let x = 0; x < User.gameBoard.array[y].length; x++) {
			if (User.gameBoard.array[y][x] !== " ") {
				let id = Number(y.toString() + x.toString());
				id = userBoardIDs[id];
				const box = document.querySelector(`#${id}`);
				box.classList.add("ship");
			}
		}
	}
}

function enemyAttack(enemy) {
	const y = enemy[0];
	const x = enemy[1];
	const coordsID = `P1Y${y}X${x}`;
	const coords = document.querySelector(`#${coordsID}`);
	if (User.gameBoard.array[y][x] !== "X") {
		coords.classList.add("hit");
	} else {
		coords.classList.add("miss");
	}
}

const clickArray = [];

function clickEnemy() {
	const aiBoardY = document.querySelectorAll(".enemy-board > div");
	aiBoardY.forEach((Y) => {
		const aiBoardX = Y.querySelectorAll("div");
		aiBoardX.forEach((X) => {
			X.addEventListener("click", () => {
				const y = X.id.slice(3, 4);
				const x = X.id.slice(5);
				for (let i = 0; i < clickArray.length; i++) {
					if (clickArray[i][0] === y && clickArray[i][1] === x) return;
				}
				clickArray.push([y, x]);
				const enemy = turn(y, x);
				if (AI.gameBoard.array[y][x] !== "X") {
					X.classList.add("hit");
				} else {
					X.classList.add("miss");
				}
				enemyAttack(enemy);
				checkSunkStatus();
			});
		});
	});
}

function setupShips() {
	const ships = document.querySelectorAll(".ships");
	let grabIndex = 0;
	const dragArray = [];
	ships.forEach(ship => {
		ship.addEventListener("dragstart", (e) => {
			grabIndex = Math.floor(e.offsetX / 52.5);
			if (grabIndex < 0) grabIndex = 0;
			dragArray.push(ship);
		})
	});

	const userBoardY = document.querySelectorAll(".your-board > div");
	userBoardY.forEach((Y) => {
		const userBoardX = Y.querySelectorAll("div");
		userBoardX.forEach((X) => {
			X.addEventListener("dragover", (e) => {
				e.preventDefault();
			})
			X.addEventListener("drop", () => {
				const y = Number(X.id.slice(3, 4));
				let x = Number(X.id.slice(5));
				x -= grabIndex;
				const shipID = dragArray[dragArray.length - 1].classList[1];
				User.gameBoard.shipArray.forEach(ship => {
					if (ship.ID === shipID) {
						User.gameBoard.placeShip([y, x], ship, "X");
						populateUser();
					}
				})
			})
		});
	});
}

export default function domInteraction() {
	populateUser();
	clickEnemy();
	setupShips();
}
