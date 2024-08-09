const express = require('express');

const app = express();
app.use(express.json());

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log('Server is listening on port: ', PORT);
})

async function getAstro() {
    const url = 'http://api.open-notify.org/astros.json';

    const options = {
        method: 'GET',
    }

    try {
        const response = await fetch(url);
        const result = await response.json();
        console.log(result);
    } catch(error) {
        console.log(error);
    }
}

getAstro();