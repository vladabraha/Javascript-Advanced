function validate(schema, values){

    let result = []
    Object.keys(schema).forEach((key) =>{
        let validationFunction = schema[key]
        let value = values[key]
        let vysledek = validationFunction(value)
        if(!vysledek){
            result.push(key)
        }

    })
    return result
}


module.exports = {
    validate: validate,
}