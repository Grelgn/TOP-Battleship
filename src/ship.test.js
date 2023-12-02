import Ship from "./ship";

const ship = new Ship(3);

test("hit() function increments the amount of hits taken", () => {
	ship.hit();
	expect(ship.hits).toBe(1);
});

test("ship.sunk stays false when the amount of hits is < ship's length", () => {
    expect(ship.sunk).toBeFalsy();
});

test("ship.sunk becomes true when the amount of hits is == ship's length", () => {
	ship.hit();
    ship.hit();
    expect(ship.sunk).toBeTruthy();
});

test("Can't hit after the ship has sunk", () => {
    ship.hit();
    expect(ship.hits).toBe(3);
})