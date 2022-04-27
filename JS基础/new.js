function _new(_constructor,...arguments){
    if(typeof _constructor !== "function"){
        throw "type error";
    }
    let newObj = Object.create(_constructor.prototype);
    let result = _constructor.apply(newObj,arguments)
    return typeof result === "object" ? result : newObj;
}

function Person(name,age){
    this.name = name;
    this.age = age;
}
let person1 = new Person('person1');
console.log(person1.name);

let person2 = _new(Person,'person2',22);
console.log(person2.name,person2.age);
console.log(Object.getPrototypeOf(person2))
console.log(person2.__proto__.constructor)


// let person;
// let person3 = _new(person,'person3');