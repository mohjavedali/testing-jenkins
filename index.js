const getrandomnumber = function () {
    return new Promise((res, rej) => {
        setTimeout(() => {
            res(Math.floor(Math.random() * 999999999));
        }, 1000);
    })
}

const randomNumber = async function () {
    const sum = await getrandomnumber() + await getrandomnumber();
    console.log(sum);
}

randomNumber();

const express = require('express');
const app = express();
const port = 3000;
app.get('/', (req, res) => {
    res.send('Hello World!!!!');
});
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});