class Microsoft {
    constructor(name) {
        this._name = name;

    }
    get name() {
        return this._name;
    }
    set name(newName) {
        this._name = newName;
    }
    ocupation() {
        return this.name + " is a philantropist!";
    }
}

class Facebook extends Microsoft {
    constructor(name, age) {
        super(name);
        this.age = age;
    }
    studentAge() {
        return this.name + " is " + this.age;
    }
}
const henry = new Microsoft("William Henry Gates III");
console.log(henry.ocupation());
const elliot = new Facebook("Mark Elliot Zuckerberg", 23);
console.log(elliot.ocupation());
console.log(elliot.studentAge());

module.exports = {
    Microsoft,
    Facebook
}