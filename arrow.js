// function declaration
/* function add(first, second) {
  const total = first + second;
  return total;
} */

const number = 56;
// function expression
const add1 = function (first, second) {
  const total = first + second;
  return total;
};

// function expression with annonymous function
const add2 = function (first, second) {
  const total = first + second;
  return total;
};

function add4(first, second) {
  return first + second;
}

const add5 = function (first, second) {
  return first + second;
};

// Arrow function
const add6 = (first, second) => first + second;

const result = add6(10, 20);
console.log(result);

// interview question: differences between
// function declaration, function expression & arrow function
