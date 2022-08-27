// Code your solutions in this file

const names = ["Guadalupe", "Ollie", "Aki"]

function writeCards(names, event) {
    let myArray = []
    for (let i=0; i< names.length; i++) {
        myArray.push (`Thank you, ${names[i]}, for the wonderful ${event} gift!`)
    }
   return myArray;

}
function countDown(tally) {
    while (tally >= 0) {
        console.log(tally--);
    }
}


   
 
