// V předchozích ukázkách asynchronní funkce nevracela žádnou hodnotu
// => v tomto příkladě budeme navracet spojení dvou řetezců

function addString (previous, current, callback) {
  setTimeout (() => {
    callback (previous + ' ' + current);
  }, Math.floor (Math.random () * 100) + 1);
}

//callback je ta třetí hodnota, která se předává a volá se v dané metodě po jejím dokončení. Pokud se používá, je třeba ho vždycky využít
//(i kdyby byl prázdy)
function addAll () {
  let result = addString ('', 'A', value => {
    addString (value, 'B', value => {
      addString (value, 'C', value => {
        console.log (value);
      });
    });
  });
}

addAll ();
