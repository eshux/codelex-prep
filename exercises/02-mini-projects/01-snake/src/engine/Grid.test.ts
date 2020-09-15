import { Grid } from "./Grid";
import { Configuration } from "./Configuration";
import { Cell } from "./Cell";

describe("Grid", () => {
  const configuration = {
    level: 0,
    speed: 100,
    width: 1000,
    height: 1000,
    nbCellsX: 100,
    nbCellsY: 100,
    cellWidth: 10,
    cellHeight: 10,
    apples: 5
  } as Configuration;

  it("should have five apples present", () => {
    const grid = new Grid(configuration);

    const apples = grid.getApples();

    expect(apples.length).toBe(5);
  });

  it("should check if apple is inside", () => {
    const grid = new Grid(configuration);

    const apple = grid.getApples()[0];

    expect(grid.isAppleInside(new Cell(apple.x, apple.y))).toBeTruthy();
    expect(grid.isAppleInside(new Cell(999, 999))).toBeFalsy();
  });

  it("should remove apple", () => {
    const grid = new Grid(configuration);

    const apple = grid.getApples()[0];
    grid.removeApple(apple);

    expect(grid.isAppleInside(apple)).toBeFalsy();
    expect(grid.getApples().length).toBe(4);
  });
});
