

const axios = require('axios');

async function asyncFunc() {
    try {
        // fetch data from a url endpoint
        const response = await axios.get("https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY");
        //const data = await response.json();

        return response;
    } catch (error) {
        alert(error); // catches both errors
    }
}

asyncFunc().then(result => console.log(result))

const fs = require('fs');

fs.readFile('./././jsconfig.json', (err, data) => {
    if (err) throw err;
    let student = JSON.parse(data);
    console.log(student);
});

console.log('This is after the read call');