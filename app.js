log = message => console.log(message);
log('Hallo wie geht es dir');
setTimeout(() => log('Es geht sehr gut'), 2000);

async function getWords() {
    await Promise.resolve(console.log('first'));
    await Promise.resolve(setTimeout(() => console.log('second'), 3000));
    await Promise.resolve(setTimeout(() => console.log('third'), 2000));
    Promise.resolve(setTimeout(() => console.log('fourth'), 1000));
}

getWords(); //all settimeouts are being fired at same time, need to figure out why

