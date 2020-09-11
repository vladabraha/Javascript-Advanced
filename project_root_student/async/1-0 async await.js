//mnohem hezčí přes await
function printString (previous = '', current = '') {
  let newString = previous + current;

  var promise = new Promise ((resolve, reject) => {
    setTimeout (() => {
      resolve (newString); //sem se přiřadí výsledek do resultstringu
    }, Math.floor (Math.random () * 100) + 1);
  });

  return promise;
}

async function printAll () {
  let resulFirst = await printString ('A');
  let resultSecond = await printString (resulFirst, 'B');
  let resultThird = await printString (resultSecond, 'C');
  console.log (resultThird);
}

printAll ();
