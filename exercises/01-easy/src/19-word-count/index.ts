/**
 * Given a phrase, count the occurrences of each word in that phrase.
 *
 * For example for the input "olly olly in come free"
 *
 *  olly: 2
 *  in: 1
 *  come: 1
 *  free: 1
 */

class Words {
  count(str: string) {
    const arr = str.split(' ');

    arr.forEach(word => {
      let count = 2;
      return `${word}: ${count}`;
      
    });
  



  }
}


export { Words };
