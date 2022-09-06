const fish = {
  name: "King Hilsa",
  address: "Chadpur",
  color: "silver",
  phone: "01716312977",
  price: 4000,
};
// const phone = fish.phone;
// const color = fish.color;
// const price = fish.price;

const { phone } = fish;

console.log(phone);
console.log(phone);
console.log(phone);
console.log(phone);
console.log(phone);

const { age, name } = { name: "Almas", age: 56, profession: "makeup artist" };
console.log(age);

const { address } = fish;
console.log(address);

// array destructuring
const [first, another] = [44, 99, 88, 456];
console.log(first, another);

const nayok = ["sakib", "siam", "nisho"];
const [king, lost, notun] = nayok;
console.log(notun);

function getNames() {
  return ["Alim", "Halim"];
}

const [baba, chacha] = getNames();
console.log(chacha, baba);

const y = (x) => x * x;
const z = y(5);
console.log(z);
