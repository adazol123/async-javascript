const fetch = require('node-fetch');
const fs = require('fs');


//** Async/await **/


//load file with async/await
const loadFile = async () => {
    try {
        const data = await fs.promises.readFile('./test.txt', {encoding: 'utf-8'});
        console.log(data);

    } catch (error) {
        console.error(error);
    }
};

loadFile();

//fetch api with async/await without error handling
const fetchAPI = async (id) => {
    try {
        const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
        const data = await res.json();
        console.log(data);

    } catch(error) {
        console.error(error)
    }
};
fetchAPI(4);


