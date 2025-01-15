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