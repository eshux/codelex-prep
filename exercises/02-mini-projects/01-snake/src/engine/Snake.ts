import { Cell } from "./Cell";
import { Direction } from "./Direction";

export class Snake {
  head: Cell = new Cell(2, 0);
  tail: Cell[] = [new Cell(0, 0), new Cell(1, 0)]
  direction: Direction = 'Right';

  setDirection(direction: Direction) {
    this.direction = direction;
  }

  move() {
    this.tail.shift();
    this.tail.push(this.head);
    switch(this.direction){ 
      case 'Right': {
        this.head = new Cell(this.head.x + 1, this.head.y);
        break;
      } 
      case 'Down': {
        this.head = new Cell(this.head.x, this.head.y+1);
        break;
      }
      case 'Up': {
        this.head = new Cell(this.head.x, this.head.y-1);
        break;
      }
      case 'Left': {
        this.head = new Cell(this.head.x - 1, this.head.y);
        break;
      } 
    }
  
  }

  grow() {}

  getHead(): Cell {
    return this.head;
  }

  isSnake(cell: Cell): boolean {
    return false;
  }

  getDirection(): Direction {
    return "Right";
  }

  getTail(): Cell[] {
    return this.tail;
  }
}
