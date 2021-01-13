log = message => console.log(message);
log('Hallo wie geht es dir');
setTimeout(() => log('Es geht sehr gut'), 2000);

function getWords() {
    console.log('first');
    setTimeout(() => {
        console.log('second');
        setTimeout(() => {
            console.log('third');
            setTimeout(() => {
                console.log('fourth');
            }, 1000)
        }, 2000)
    }, 3000)
}

getWords();

function done() {console.log("Job's done!")};

countdown = (num, callback) => {
    setTimeout(() => {
        if(num > 0) {
            console.log(num);
            countdown(num - 1, callback);
        } else {
            callback();
        }
    }, 1000);
};

countdown(10, done);

let lunchTime = true;
const orderMeSomeFood = () => {
    return new Promise((resolve, reject) => {
        //stuff
    }