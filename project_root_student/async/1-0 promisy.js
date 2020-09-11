//to samé přes promisy
function printString (previous = '', current = '') {
  let newString = previous + current;

  var promise = new Promise ((resolve, reject) => {
    setTimeout (() => {
      resolve (newString); //sem se přiřadí výsledek do resultstringu
    }, Math.floor (Math.random () * 100) + 1);
  });

  return promise;
}

function printAll () {
  printString ('A')
    .then (resultString => {
      //tady v resulstringu máme výsledek printStringu
      return printString (resultString, 'B'); //musíme vracet něco z metody, to pak přijde do resultstringu pro další then
    })
    .then (resultString => {
      //tady máme return z minulýho then (tedy volání print stringu)
      return printString (resultString, 'C');
    })
    .then (resultString => {
      console.log (resultString);
    });
}

printAll ();
