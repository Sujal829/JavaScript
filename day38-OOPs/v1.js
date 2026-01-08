// access modifiers
//  - how properties and methods can be accessed 
//  - js does not have any access modifiers like public, private and protected
//  - 


//  1. Public : default behaviour of js
//     - members are accessible from anywhere
//     - no need to write anything



// 2. Private : 
//    - use # symbol before property or method name
//    - members are only accessible inside the class
//    - cannot be accessed outside the class
//    - introduced in ES6 ES2022


// eg:

class BankAccount {
    #bal = 0;
    constructor(name, balance) {
        this.name = name;
        this.#bal += balance;
    } 

    getBalance() {
        return this.#bal; // accessing private member inside a class
    }
}

const acc1 = new BankAccount("Sujal", 500);
console.log(acc1);
console.log(acc1.bal); // undefined as bal is private
console.log(acc1.getBalance()); // calling private member outside a class



//  3. Protected :
//      - use _ (underscore) symbol before property or method name
//      - members are accessible within the class and its subclasses
//      - cannot be accessed outside the class
//      - introduced in ES6 ES2022

// eg:

class Person {
    _name = "John";
}

class Student extends Person{
    getName(){
        console.log(this._name)
    }
}

const student = new Student();
console.log(student);
student.getName(); // John




//  setter and getter
//   - setters and getters are functions that are used to set and get values of private members and protected members
//   - used to set and get values of private members and protected members
//   - they are also called accessor methods
//   - they are used to validate data before setting it
//   - they are used to perform some operations before getting the value
//   - they are used to hide implementation details


// eg:

class Emp{
    #sal=0;

    constructor(empName,sal){
        this.empName=empName;
        this.#sal=sal;
    }
        
    get(){
        return this.#sal;
    }
    set(sal){
        if(sal>0){
           this.#sal=sal;
        }

    }
}

let emp=new Emp('john',4000);
console.log(emp.get());
emp.set(9000)
console.log(emp.get());