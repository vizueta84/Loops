// let num = 1000;
// let i = 0;
// do {
//     console.log(i);
//     i++
// } while ( i < num);

// const person = {
//     firstName: "Jane",
//     lastName: "Doe",
//     birthDate: "Jan 5, 1925",
//     gender: "female"
// }
// for (const [key,value] of Object.entries(person)){
//     console.log(`${key}: ${value}`);
// }
// console.log(Object.keys(person))

const arrayOfPersons = [
  {
    firstName: "John",
    lastName: "Doe",
    age: 46,
    birthDate: "Jan 5, 1925",
    gender: "male",
  },
  {
    firstName: "Joanne",
    lastName: "Doe",
    age: 43,
    birthDate: "Dec 8, 1985",
    gender: "female",
  },
];

const birth = arrayOfPersons.filter((x) => {
  let year = parseInt(x.birthDate.slice(-4));

  return year < 1990;
});
console.log(birth);


arrayOfPersons[0]["birthDate"]
// const male = arrayOfPersons.filter(x => x.gender == "male")
// console.log(male)

// const map1 = arrayOfPersons.map(x => x)
// console.log(map1)

for (let person of arrayOfPersons) {
  if (person.age % 2 == 0) {
    console.log(person.age);
  }
  console.log(person.age);
}

// for ( let i = 0; i < arrayOfPersons.length; i++){
//     if (arrayOfPersons[i].age % 2 == 0){
//     console.log(arrayOfPersons[i].age)
//     }
//     console.log(arrayOfPersons[i].age)
// }
