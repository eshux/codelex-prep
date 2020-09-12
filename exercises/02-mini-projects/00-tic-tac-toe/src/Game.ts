export type XO = "X" | "O" | "-";

// const WINNING_COMBINATIONS:number[][] = [
//   [0, 1, 2],
//   [3, 4, 5],
//   [6, 7, 8],
//   [0, 3, 6],
//   []
// ]


export class Game {
  cells: XO[] = ["-", "-", "-", "-", "-", "-", "-", "-", "-"];

  getCells(): XO[] {
    return this.cells;
  }

  getTurn(): XO {
    const countX = this.cells.filter(c => c === 'X').length;
    const countO = this.cells.filter(c => c === 'O').length;
    return countX === countO ? 'X' : 'O';
  }

  getWinner(): XO {
    // for (const combination of WINNING_COMBINATIONS) {
    //   if ()
    // }

    if (this.cells[0] === this.cells[1]  && this.cells[1] === this.cells[2]) {
      return this.cells[0];
    } 

    if (this.cells[0] === this.cells[3]  && this.cells[3] === this.cells[6]) {
      return this.cells[0];
    } 
    return '-'
  }

  isTie(): boolean {
    return false;
  }

  onClick(i: number): void {   
    if(this.cells[i] === '-') {
      this.cells[i] = this.getTurn();
    } 
      
  }

  restart(): void {
    console.log("restart called");
  }
}
