// map, reduce, filter, find

const fruits = ["apples", "banana", "blueberries"];

//map to print
fruits.map((fruit) => console.log(fruit));

const coppiedFruits = fruits.map((fruit, index) => {
    return { id: index, fruit, delicious: "yes yes yes"};
});

console.log(coppiedFruits);

people[
    {
        name: "David",
        age: 50
    },
    {
        name: "Andrej",
        age: 30
    },
    {
        name: "John",
        age: 20
    }
];

const peopleAgeSum = people.reduce((total, person) => total + person.age, 0);
console.log(peopleAgeSum);