const person = {
    name: 'Alice',
    age: 22,
    city: 'New York'
};

// console.log(person);

// console.log(person.name);
// console.log(person.city);
// console.log(person['age']);

// person.country = 'USA';
// console.log(person);

// person.age = 30;
// console.log(person);

// delete person.city;
// console.log(person);

for (const key in person) {
    console.log('key =', key, 'value =', person[key])
}
