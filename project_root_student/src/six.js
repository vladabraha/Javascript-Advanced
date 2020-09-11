function printString(string, callback) {
    console.log("Started " + string);
  
    setTimeout(() => {
      console.log(string);
    }, Math.floor(Math.random() * 1000) + 1);
  }
  
  function printAll() {
    printString("A");
    printString("B");
    printString("C");
  }
  
  printAll();