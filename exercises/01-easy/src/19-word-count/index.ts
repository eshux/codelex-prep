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
    const arr = str.toLowerCase().replace(/\s+/g, ' ').split(' ');

    let resultObj: any = {};
    
    arr.forEach(i => {
      let count = 0;
      arr.forEach(j => {
        if (i === j) {
        count++
        }
      })
      resultObj[i] = count;
    })

   if ('' in resultObj) {
    delete resultObj[''];
   } 
   
   return resultObj;
    
  }
}


export { Words };
