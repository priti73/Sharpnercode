console.log("a");

console.log("b");



let printD = () => {

  let promise = new Promise((res, rej) => {

    setTimeout(() => {

      res("d");

      printE().then((x) => {

        console.log(x);

      });

    });

  }, 0);

  return promise;

};



setTimeout(() => {

  console.log("c");

  printD().then((txt) => {

    console.log(txt);

  });

}, 3000);



let printE = () => {

  let promise = new Promise((res, rej) => {

    res("e");

  });

  return promise;

};