import { Game } from "./Game";

describe("Tic-Tac-Toe", () => {
  it("should start with blank state", () => {
    const game = new Game();

    expect(game.getCells()).toEqual([
      "-", "-", "-",
      "-", "-", "-",
      "-", "-", "-"
    ]);
    expect(game.getTurn()).toBe("X");
    expect(game.getWinner()).toBe("-");
    expect(game.isTie()).toBe(false);
  });

  it("should be able to make a move", () => {
    const game = new Game();

    game.onClick(0)

    expect(game.getCells()).toEqual([
      "X", "-", "-",
      "-", "-", "-",
      "-", "-", "-"
    ]);
    expect(game.getTurn()).toBe("O");
    expect(game.getWinner()).toBe("-");
    expect(game.isTie()).toBe(false);
  });

  it("both players should be able to makes move", () => {
    const game = new Game();

    game.onClick(0);
    game.onClick(1);

    expect(game.getCells()).toEqual([
      "X", "O", "-",
      "-", "-", "-",
      "-", "-", "-"
    ]);
    expect(game.getTurn()).toBe("X");
    expect(game.getWinner()).toBe("-");
    expect(game.isTie()).toBe(false);
  });

  it("players should not be able to click on one cell twice", () => {
    const game = new Game();

    game.onClick(0);
    game.onClick(0);

    expect(game.getCells()).toEqual([
      "X", "-", "-",
      "-", "-", "-",
      "-", "-", "-"
    ]);
    expect(game.getTurn()).toBe("O");
    expect(game.getWinner()).toBe("-");
    expect(game.isTie()).toBe(false);
  });

  it("player should be able to win taking firs horizontal line", () => {
    const game = new Game();

    game.onClick(0);
    game.onClick(3);
    game.onClick(1);
    game.onClick(4);
    game.onClick(2);

    expect(game.getCells()).toEqual([
      "X", "X", "X",
      "O", "O", "-",
      "-", "-", "-"
    ]);
    // expect(game.getTurn()).toBe("O");
    expect(game.getWinner()).toBe("X");
    expect(game.isTie()).toBe(false);
  });

  it("player should be able to win taking firs vertical line", () => {
    const game = new Game();

    game.onClick(1);
    game.onClick(0);
    game.onClick(2);
    game.onClick(3);
    game.onClick(4);
    game.onClick(6);

    expect(game.getCells()).toEqual([
      "O", "X", "X",
      "O", "X", "-",
      "O", "-", "-"
    ]);
    // expect(game.getTurn()).toBe("O");
    expect(game.getWinner()).toBe("O");
    expect(game.isTie()).toBe(false);
  });

  it("Tie", () => {
    const game = new Game();

    game.onClick(1);
    game.onClick(0);
    game.onClick(8);
    game.onClick(5);
    game.onClick(4);
    game.onClick(6);
    game.onClick(3);
    game.onClick(7);
    game.onClick(2);

    expect(game.getCells()).toEqual([
      "O", "X", "X",
      "X", "X", "O",
      "O", "O", "X"
    ]);
    // expect(game.getTurn()).toBe("O");
    // expect(game.getWinner()).toBe("-");
    expect(game.isTie()).toBe(true);
  });
});
