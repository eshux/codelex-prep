/**
 * Manage a game player's High Score list.
 *
 * Your task is to build a high-score component of the classic Frogger game, one of the highest selling and addictive games of all time, and a classic of the arcade era. Your task is to write methods that return the highest score from the list, the last added score and the three highest scores.
 */

class HighScores {
  scores: number[];
  constructor(scores: number[]) {
    this.scores = scores;
  }

  get latest() {
    return this.scores[this.scores.length-1];
  }

  get personalBest() {
    return this.highScoreFunc(this.scores);
  }

  get personalTopThree() {

    const high = this.highScoreFunc (this.scores);
    const arr1 = [...this.scores];
    arr1.splice(arr1.indexOf(high), 1);
  
    const high2 = this.highScoreFunc(arr1);
    arr1.splice(arr1.indexOf(high2), 1);

    const high3 = this.highScoreFunc(arr1);
    
    const result: number[] = [high, high2, high3];
    
    if(this.scores.length >= 3) {
      return result;
    } else if (this.scores.length >= 2) {
      result.pop();  
      return result;
    } else {
      result.pop();
      result.pop();
      return result;
  }
  } 

  highScoreFunc (arr: number[]) {
    let highscore = arr[0];
    arr.forEach(i => {
      if (i > highscore) {
        highscore = i;
      } 
    })
    return highscore;
  }

}

export { HighScores };
