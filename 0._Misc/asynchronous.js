//Why asynchronous code
//so we don't block rest of the execution
//When
//communicating with external resources

//promises

//pending
//fulfilled
  //resolved
  //rejected

/*new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Everything went well.");
        reject("Something went wrong");
    }, 4000)
}).then(message => {
    console.log(message);
}).catch(errorMessage => {
    console.log(errorMessage);
});*/

/*new Promise((resolve, reject) => {
    Math.random() > 0.5 ? resolve("Happy days are starting") : reject("Sad days are starting");
}).then(message => {
    console.log("Yaay ", message);
}).catch(errorMessage => {
    console.log(":(", errorMessage);
})*/

// wrapping function into a promise
function myPromisefunction() {
    return new Promise((resolve, reject) => {
        try {
            setTimeout(() => {
                resolve("Everything went well. Yay");
            }, 3000);
        } catch {
            reject("Welp it messed up");
        }
    });
}

//call the function and handle the promises

/*myPromisefunction().then(message => {
    console.log( message);
}).catch(errorMessage => {
    console.log(errorMessage);
})*/

//async / await
/*async function asyncCall() {
    const message = await myPromisefunction();
    console.log(message);
}

asyncCall();*/

//faster and imediately
(async function asyncCall() {
    const message = await myPromisefunction();
    console.log(message);
})()