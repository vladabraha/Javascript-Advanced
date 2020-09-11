const Person = require("./person")
const Human = require("./human")

class Uuee extends Person {
    constructor(owner, state, uid){
        super(state, uid)
        if(!(owner instanceof Human)){
            throw new Error("this is not human")
        }
        this._owner = owner
    }

    sayHello(caller){
        if(caller !== this.owner){
            return "Hello " + this._owner.getName() + "."
        }else{
            return "No!"
        }
    }



}

module.exports = Uuee