/*
can't use Boolean(value)
consume any number of parameters
return array of objects
object per single param passed to the function
each object should contains:
   - isFalsy
   - type
   - stringLength
   - index
  [
        {
            "isFalsy": false,
            "type": "number",
            "StringLength": 1,
            "index": 0
        },
        ...
  ]
 */

function getInfo() {
  var results = [];

  let values = [...arguments]


  values.forEach((value, index) => {
    let isFalsy = !value
    let stringLength = value.toString().length
    let type = typeof value
    
    
    let result = {
      isFalsy : isFalsy,
      StringLength: stringLength,
      type : type,
      index: index
    }
    
    results.push(result)
  });
  return results
}


module.exports = getInfo;

