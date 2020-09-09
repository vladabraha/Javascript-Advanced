/*
use implicit and explicit binding to validate age using the function validateAge
both function should return array of filtered users
do not forget to also delete used function (implicit binding)
 */

let users = [
  {
    name: 'Peter',
    age: 32,
    email: 'peter@gmail.com',
  },
  {
    name: 'John',
    age: 15,
    email: 'John@gmail.com',
  },
  {
    name: 'Jim',
    age: 16,
    email: 'Jim@gmail.com',
  },
];

//do not modify this function
function validateAge (age) {
  if (this.age < age) {
    return true;
  } else {
    return false;
  }
}

function usingImplicitBinding (users, validateAgeFunc, ageLimit) {
  let invalidUsers = [];

  users.forEach (user => {
    user.validateAgeFunc = validateAgeFunc;

    let validAge = user.validateAgeFunc (ageLimit);
    if (validAge) {
      user.validateAgeFunc = undefined
      invalidUsers.push (user);
    }
  });

  return invalidUsers;
}

function usingExplicitBinding (users, validateAgeFunc, ageLimit) {
  let invalidUsers = [];

  var object = {
    age: ageLimit,
  };

  users.forEach (user => {
    let age = user.age;
    let validAge = validateAgeFunc.call (object, age);
    if (!validAge) {
      invalidUsers.push (user);
    }
  });

  return invalidUsers;
}

module.exports = {
  usingExplicitBinding,
  usingImplicitBinding,
  validateAge,
};
