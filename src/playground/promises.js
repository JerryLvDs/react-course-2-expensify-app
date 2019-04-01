const promise = new Promise((resolve, reject) => { 
    setTimeout(() => {
        resolve({
            name: 'Jerry',
            age : 22
       });
      // reject("something wrong");
    }, 5000);
});

console.log('before');


promise.then((data) => {
    console.log('1',data);

    return new Promise((resolve, reject) => { 
        setTimeout(() => {
            resolve('this is my other promise');
          // reject("something wrong");
        }, 5000);
    });
    

}).then ((str) => {
    console.log('does this run?',str);
}).catch((error) => {
    console.log('error',error);
});


console.log('after');


