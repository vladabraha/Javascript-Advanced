function validateString(value){
    return typeof value === "string"
}

function validateNumber(value){
    return typeof value === "number"
}

function validateAny(value){
    return true
}


module.exports = {
    string: validateString,
    number: validateNumber,
    any: validateAny
}