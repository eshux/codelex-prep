export {};

function draw(num) {
    let tri = ['*'];
    let i = 0;
    while (i !== num) {
        console.log(tri.join(''));
        tri.push('*');
        i++;
    }
}

draw(3);
/* Expected output:

    *
    **
    ***

*/

draw(5);
/* Expected output:

    *
    **
    ***
    ****
    *****

*/
