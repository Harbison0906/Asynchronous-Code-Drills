function msg(message) {
  console.log(message);
}
// msg('Hello World!');

// setTimeout(function() {msg('Hidy ho, neighbor')}, 3000);

function getWords(word) {
  console.log(word);
}
// getWords('Stadium');
// setTimeout(function() {getWords('Chiefs')}, 3000);
// setTimeout(function() {getWords('Wings')}, 2000);
// setTimeout(function() {getWords('Foosball')}, 1000);

function done() {
  console.log(`Job's done!`);
}

function countdown(num, callback) {
  let number = num
  if (number > 0) {
    console.log(number)
    number--;
    setTimeout(function () { countdown(number, callback) }, 1000);
  } else callback();
}

// countdown(5, done);

let lunchTime = true;

const orderMeSomeFood = () => {
  return new Promise((resolve, reject) => {
    let random = Math.floor(Math.random() * 20);
    if (lunchTime == true && random % 2 === 0) {
      let favLunch = {
        lunch: 'Chick-Fil-A',
        drink: 'Cherry Coke'
      }
      resolve(favLunch);
    } else {
      lunchTime = false;
      let err = new Error('An error has occurred.');
      reject(err);
    }
  });
};

orderMeSomeFood().then((a) => {
  console.log(a);
}).catch((e) => {
  console.log(e);
});
