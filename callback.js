const fetch = require('node-fetch');
const fs = require('fs');


//** Callbacks **/

//setTimeout

setTimeout(() => {
    console.log('Waited 1 second');

}, 1000);


//nested setTimeouts

setTimeout(() => {
    console.log('3');
    setTimeout(() => {
        console.log('2');
        setTimeout(() => {
            console.log('1');
        }, 1000);
    }, 1000);
}, 1000);


//button event handler in browser javascipt
// const button;
// button.addEventListener('click', () => {

// })

//error first callback
fs.readFile('./test.txt', {encoding:'utf-8'}, (err,data) => {
    if (err) {
        console.error('Error');
        console.error(err);
    } else {
        console.log('Gota Data');
        console.log(data);
    } 
})

