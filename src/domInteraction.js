import { User, AI } from "./gameLoop";

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

function clickEnemy() {
	const aiBoardY = document.querySelectorAll(".enemy-board > div");
	aiBoardY.forEach((Y) => {
		const aiBoardX = Y.querySelectorAll("div");
		aiBoardX.forEach((X) => {
			X.addEventListener("click", () => {
				const y = X.id.slice(3, 4);
				const x = X.id.slice(5);
				console.log(X.id);
				console.log(y);
				console.log(x);
				if (AI.gameBoard.array[y][x] !== " ") {
					X.classList.add("hit");
				} else {
                    X.classList.add("miss");
				}
			});
		});
	});
}

export default function domInteraction() {
	populateUser();
	clickEnemy();
}
