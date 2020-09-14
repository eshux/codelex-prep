/**
 * Matrix
 * Given a string representing a matrix of numbers, return the rows and columns of that matrix.
 *
 * So given a string with embedded newlines like:
 *
 *     9 8 7
 *     5 3 2
 *     6 6 7
 *
 * representing this matrix:
 *
 *         1  2  3
 *       |---------
 *     1 | 9  8  7
 *     2 | 5  3  2
 *     3 | 6  6  7
 *
 * your code should be able to spit out:
 *
 * A list of the rows, reading each row left-to-right while moving top-to-bottom across the rows,
 * A list of the columns, reading each column top-to-bottom while moving from left-to-right.
 *
 * The rows for our example matrix:
 *
 *     9, 8, 7
 *     5, 3, 2
 *     6, 6, 7
 *
 * And its columns:
 *
 *     9, 5, 6
 *     8, 3, 6
 *     7, 2, 7
 */

class Matrix {
  constructor(private matrix: string) {
    this.matrix = matrix;
  }

  get rows() {
    const r = this.matrix.split('\n');

    const s = r.map(it => it = it.split(' ')
    );

    for (let i = 0; i < s.length; i++) {
      for (let j = 0; j < s[i].length; j++) {
        s[i][j] = parseInt(s[i][j])
      }
    }
    return s;
    }

  get columns() {
    return [];
  }
}

export { Matrix };
