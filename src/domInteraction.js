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

export default function domInteraction() {
	populateUser();
}
