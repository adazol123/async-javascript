const fetch = require('node-fetch');
const fs = require('fs');


//** Promises **/

//Create a promises
const myPromise = new Promise((resolve, reject) => {
    const rand = Math.floor(Math.random() * 2);
    if (rand === 0) {
        resolve();

    } else {
        reject();
    }
});

myPromise.then(() => console.log('Success')).catch(() => console.error('Something went wrong'));


//fs readFIle with promises
fs.promises.readFile('./test.txt', {encoding: 'utf-8'})
    .then((data) => console.log(data))
    .catch((err) => console.error(err));


//fetch with promises
fetch('https://pokeapi.co/api/v2/pokemon?limit=100&offset=200')
    .then((res) => res.json())
    .then((data) => console.log(data))
    .catch((err) => console.error(err));