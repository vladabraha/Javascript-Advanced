/*
fill the function that executes each value with a function that has the same name as the typeof value
these functions are passed as the first parameter in the object like this:
{
string: function(value) { ... },
default: function(value) { ... }
}
the second parameter is an array of values to be processed
if there is no corresponding function, use the default one
these function could throw an error, so you have to handle them
  - each error has status and code
  - if the error status (e.status) is over 500, rethrow the error, if not, console log the e.code
store the result of each function call
filter results out of null and undefined
return following structure in the array for each input value:
{
input: "...",
output: "..."
}
*/

function process (functions = {}, values = []) {
  let functionResults = [];
  var results = [];
  values.forEach (value => {
    switch (typeof value) {
      case 'number':
        let fun = functions['number'];
        let result = fun (value);
        let r = {
          input: value,
          output: result,
        };
        results.push (r);
        break;
      case 'string':
        let fun2 = functions['string'];
        let result2 = fun2 (value);
        let r2 = {
          input: value,
          output: result2,
        };
        results.push (r2);
        break;
      case 'function':
        let fun3 = functions['function'];
        let result3 = fun3 (value);
       
        let r3 = {
          input: value,
          output: result3
        }
        results.push (r3);

        break;
      default:
        let fun4 = functions['default'];
        let result4 = fun4 (value);
        let r4 = {
          input: value,
          output: result4
        }
        results.push (r4);
        break;
    }
  });

  results = results.filter (function (value) {
    return value.output !== null;
  });
  return results;
}

module.exports = process;
