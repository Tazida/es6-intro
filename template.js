const person = "Adam Sandler";
const person2 = "Ben White";
const person3 = `Donal Trump`;

const multiline =
  "First Line text \n" +
  "second line of code \n" +
  "Third line of text \n" +
  "Fourth line of string";
// console.log(multiline);

const newMultiline = `First Line text
second line of code
Third line of text 
Fourth line of string
`;
// console.log(newMultiline);

const a = 20;
const b = 30;
const nums = [78, 98, 65, 12, 6, 444];
const summary = "sum of: " + a + " and " + b + " is: " + (a + b);
// console.log(summary);

const newsummary = `sum of ${a} and ${nums.length} is: ${a + b} `;
console.log(newsummary);
