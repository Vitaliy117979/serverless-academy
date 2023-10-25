const sortWords = (array) => {
  return array.sort((a, b) => a.localeCompare(b));
};

const sortNumbersInDesc = (array) => {
  return console.log(array.sort((a, b) => b - a))
};

const sortNumbersInAsc = (array) => {
  return console.log(array.sort((a, b) => a - b))
};

const sortWordsByLength = (array) => {
  return console.log(array.sort((a, b) => a.length - b.length))
};

const uniqueElements = (arr) => {
  return console.log(arr.filter(
    (elements, index, array) => array.indexOf(elements) === index
  ))
};
module.exports = {
  sortWords,
  sortNumbersInDesc,
  sortNumbersInAsc,
  sortWordsByLength,
  uniqueElements,
};
