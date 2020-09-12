import { Snake } from './Snake'
import { Cell } from './Cell'

describe("Snake", () => {
    it("should take three cells at the beginning", () => {
        const snake = new Snake()

        expect(snake.getHead()).toEqual(new Cell(2, 0))
        expect(snake.getTail()).toEqual([new Cell(0, 0), new Cell(1, 0)])
    })

    it("should be able to move right", () => {
        const snake = new Snake()

        snake.move();

        expect(snake.getHead()).toEqual(new Cell(3, 0))
        expect(snake.getTail()).toEqual([new Cell(1, 0), new Cell(2, 0)])
    })

    
    it("should be able to move down", () => {
        const snake = new Snake()

        snake.setDirection('Down');
        snake.move();

        expect(snake.getHead()).toEqual(new Cell(2, 1))
        expect(snake.getTail()).toEqual([new Cell(1, 0), new Cell(2, 0)])
    })

    it("should be able to move up", () => {
        const snake = new Snake()

        snake.setDirection('Up');
        snake.move();

        expect(snake.getHead()).toEqual(new Cell(2, -1))
        expect(snake.getTail()).toEqual([new Cell(1, 0), new Cell(2, 0)])
    })

    
    it("should be able to move left", () => {
        const snake = new Snake()

        snake.setDirection('Down');
        snake.move();
        snake.setDirection('Left');
        snake.move();

        expect(snake.getHead()).toEqual(new Cell(1, 1))
        expect(snake.getTail()).toEqual([new Cell(2, 0), new Cell(2, 1)])
    })

    it("should change direction", () => {
        const snake = new Snake()

        snake.setDirection('Down');
        expect(snake.getDirection()).toBe('Down');
        snake.setDirection('Right');
        expect(snake.getDirection()).toBe('Right');
        snake.setDirection('Left');
        expect(snake.getDirection()).toBe('Left');
        snake.setDirection('Up');
        expect(snake.getDirection()).toBe('Up');
    })
})