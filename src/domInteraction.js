import { User, AI, turn } from "./gameLoop";

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

function clickEnemy() {
	const aiBoardY = document.querySelectorAll(".enemy-board > div");
	aiBoardY.forEach((Y) => {
		const aiBoardX = Y.querySelectorAll("div");
		aiBoardX.forEach((X) => {
			X.addEventListener("click", () => {
				const y = X.id.slice(3, 4);
				const x = X.id.slice(5);
				const enemy = turn(y, x);
				if (AI.gameBoard.array[y][x] !== "X") {
					X.classList.add("hit");
				} else {
					X.classList.add("miss");
				}
				enemyAttack(enemy);
			});
		});
	});
}

export default function domInteraction() {
	populateUser();
	clickEnemy();
}
