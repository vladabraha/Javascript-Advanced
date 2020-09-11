
class Person{

    constructor(state = "active", uid = "0-0"){
        this.state = state
        this._uid = uid
        //tady musí být statický přístup, aby to fungovalo napříč instancema
        Person.count += 1
    }

    getState(){
        return this.state
    }

    setState(state){
        if(state === "active" || state === "inactive"){
            this.state = state
        }else{
            throw new Error("invalid value" + state)
        }
      
    }

    getUid(){
        return this._uid
    }

    static getCountOfPersons(){
        return Person.count
    }
}

Person.count = 0

module.exports = Person