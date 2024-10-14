const id = 1;
const productName = "product is apple";
const rating = 5;

const product = {
  id,
  productName,
  rating,
};

const product2 = {
  description: "description pf produc2",
  id,
  productName,
  rating,
};

const { description } = product2;

console.log(description);

const array = [1, 2, 3, 4, 5];

const [arrayFirstEle, arraySecondEle, arrayThirdEle] = array;

const array2 = [5, 6, 7, 78, 8];

console.log([...array2, ...array]);

function getInfo(a, b, c, d, e) {
  console.log(a, b, c, d, e);

  return "Shubham";
}

console.log(getInfo(1, 2, 3, 4, 5));

const personArr = [
  {
    name: "Person1",
    age: 24,
    country: "india",
  },
  {
    name: "Person2",
    age: 23,
    country: "USA",
  },
  {
    name: "Person3",
    age: 28,
    country: "canada",
  },
];

let nameArr = personArr.map((person, i) => {
  return person.name;
});
