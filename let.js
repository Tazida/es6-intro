// breakup with var
// no more use of var
// let: let it to ressign
// const: do not allaw it to ressign

let money = 25;
money = 35;
console.log(money);

const bird = "jaan pakhi";
// bird = "moyna pakhi";
const message = bird + " moyna tiya";
console.log(message);

const numbers = [12, 89, 65, 45];
// ressignis not allowed
// numbera = [77, 66, 55, 22, 99]
numbers.push(123);
numbers[1] = 90;
console.log(numbers);

const student = {
  name: "Rina",
  address: "Rongpur",
};
// student = {name: 'Masuma'}
student.name = "Masuma";

let sum = 0;
for (let i = 0; i < numbers.length; i++) {
  const number = numbers[i];
  sum = sum + number;
}
console.log(number);
