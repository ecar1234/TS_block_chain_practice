interface Human {
    name: string,
    gender: string,
    age: number
}

const person = {
    name: "JK",
    gender: "male",
    age: 25
}
const name = "jk", age = 24, gender = "male";
const sayHi = (person:Human):string => {
    return `hello ${person.name}, you are ${person.age}, you are ${person.gender}`;
}

console.log(sayHi(person));


export {}; 