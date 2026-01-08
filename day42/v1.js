













class setting{
    #theam;
    constructor(theam='light'){
        this.#theam=theam;
    }
    get theam(){
        return this.#theam;
    }
    set theam(value){
        if(['dark','light'].includes(value)){
            this.#theam=value;
        }else{
            throw new Error('invalid value');
        }
    }
}

const settings=new setting();
console.log(settings.theam);
settings.theam='dark';
console.log(settings.theam);



// Abstraction

class notification{
    send(message){
        throw('this method must be implemented by subclass'); // throw will only show error message 
    }
}
class Email extends notification{
    send(message){
        console.log(`sending email:${message}`);
    }
}

class SMS extends notification{
    send(message){
        console.log(`sending sms:${message}`);
    }
}


const email =new Email();
email.send("hello");

const sms =new SMS();
sms.send("hi");


    


class user {
    constructor(name){
        this.name=name;
    }

    getinfo(){
        console.log(`name is ${this.name}`) ;
    }
}

class Admin extends user{
    constructor(name,role){
        super(name);
        this.role=role;
    }
    manageusers(){
        console.log(`${this.name} is managing users`);
    }
 }

 class superadmin extends Admin{
    constructor(name,role,level){
        super(name,role);
        this.level=level;
    }
    managesystem(){
        console.log(`${this.name} is managing system`);
    }
  }

  const sa = new superadmin('sujal','super admin',1);
  sa.manageusers();
  sa.managesystem();
  sa.getinfo();
