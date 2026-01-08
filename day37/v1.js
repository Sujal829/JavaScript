// Modules: (import/export)
// Constructor
// Classes - static properties and methods parameteriaed


// Modules:
    // -Keep code clean & Organised
    // - Reuse function / Classes across files
    // -Each module ha its own scope (Avoid name clash)
    // -Make large project easier to manage

    // npm - node package manager
    // 

    // npm init
    // give name of the project/application
    // enter
    // yes
    // package.json file is created
    // 

import {add} from './math.js';
import math from './math.js';
console.log(add(20, 5));
console.log(math(20, 5));

// static property
// it is a property that belongs to class but does not belong to any object
// we can access them using className.propertyName
class login {
    static count = 0;
    static getCount(){
        return login.count++;
    }
    constructor(username){
        this.username = username;
    }
    loginCount(){
        console.log(this.username + ' has logged in ' + login.getCount());
    }

}
let userOne = new login('sujal');
userOne.loginCount();
userOne.loginCount();
userOne.loginCount();
let userTwo = new login('john');
userTwo.loginCount();
userTwo.loginCount();

class Login {
    count = 1;

    constructor(username){
        this.username = username;
    }

    getCount(){
        return this.count++;
    }

    loginCount(){
        console.log(this.username + ' has logged in ' + this.getCount() + ' times');
    }
}

// Each user tracks their own count
let u1 = new Login("raj");
u1.loginCount(); // Alice has logged in 0 times
u1.loginCount(); // Alice has logged in 1 times

let u2 = new Login("rohan");
u2.loginCount(); // Bob has logged in 0 times


// 
class Login1 {
  static totalLogins = 0; // shared across all users (initialized once)

  constructor(username) {
    this.username = username;
    this.userLogins = 0;  // each user’s own login counter
  }

  doLogin() {
    this.userLogins++;       // instance property (per user)
    Login1.totalLogins++;     // static property (global)
    console.log(`${this.username} logged in ${this.userLogins} times`);
  }

  static showTotalLogins() {
    console.log(`Total logins (all users): ${Login1.totalLogins}`);
  }
}

let user1 = new Login1("Alice");
let user2 = new Login1("Bob");
user1.doLogin(); 
user1.doLogin(); 
user2.doLogin();
Login1.showTotalLogins(); // Total logins (all users): 3




// static method
// it is a method that belongs to class but does not belong to any object
// we can call them directly without creating an object of the 
// static method is used when you whant to do 
class Person {
    constructor(name) {
        this.name = name;
    }
    static walk() {
        console.log('walking');
    }
    static run() {
        console.log('running');
    }
    talking () {
        console.log('talking');
    }
}
let person = new Person('Sujal');
Person.walk(); // calling a static method
Person.run(); // op - running
person.talking(); // op - talking
//console.log(person.walk()); // error as it is not an instance method
//person.run(); // error as it is not an instance method