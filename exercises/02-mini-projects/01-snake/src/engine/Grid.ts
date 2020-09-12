import { Cell } from "./Cell";
import { Configuration } from "./Configuration";

export class Grid {
  private configuration: Configuration;

  constructor(configuration: Configuration) {
    this.configuration = configuration;
  }

  apples: {
    
  }
  seed(): void {}

  isAppleInside(cell: Cell): boolean {

    return this.apples.find(it => it.x === cell.x && it.y === cell.y) !== undefined;
  
  }

  removeApple(cell: Cell): void {}

  isDone(): boolean {
    return false;
  }

  getApples(): Cell[] {
    return [
      new Cell(33, 22),
      new Cell(35, 22),
      new Cell(37, 22),
      new Cell(39, 22),
      new Cell(41, 22)
    ];
  }
}
