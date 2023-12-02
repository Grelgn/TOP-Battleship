import Player from "./player";

const AI = new Player();

test("Attacks random coordinates", () => {
	AI.attack();
	AI.attack();
	AI.attack();
	expect(AI.attackArray.length).toBe(3);
});
