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
  if (number > 0) {console.log(number)
    number--;
  setTimeout(function() {countdown(number, callback)}, 1000);
  } else callback();
}

countdown(5, done);