var isMomHappy = true;

// Promise
var willIGetNewPhone = new Promise(
    function (resolve, reject) {
        if (isMomHappy) {
            var phone = {
                brand: 'Samsung',
                color: 'black'
            };
            resolve(phone); // fulfilled
        } else {
            var reason = new Error('mom is not happy');
            reject(reason); // reject
        }

    }
);

// 2nd promise
var showOff = function (phone) {
    var message = 'Hey friend, I have a new ' +
                phone.color + ' ' + phone.brand + ' phone';

    return Promise.resolve(message);
};

// call our promise
var askMom = function () {
    willIGetNewPhone
    .then(showOff) // chain it here
    .then(function (fulfilled) {
            console.log(fulfilled);
            // output: 'Hey friend, I have a new black Samsung phone.'
            document.getElementById("promiseOutput").textContent=fulfilled;
        })
        .catch(function (error) {
            // oops, mom don't buy it
            console.log(error.message);
            // output: 'mom is not happy'
        });
};

askMom();

const promise = new Promise(
    (resolve,reject)=>{
        var res = false;
        if(res){
            resolve("resolved")
        } else{
            reject(Error("Error"))
        }
})

function returnPromise(){
    promise
        .then((res)=>document.getElementById("output").textContent = (res))
        .catch(err=>document.getElementById("output").textContent=err.message)
}
returnPromise();

//use catch to catch error

// const returnedPromise = new Promise(
//     (resolve,reject)=>{
//         setTimeout(()=>{
//             reject(Error("promise rejected after 1 s"))
//         },1000)
// });

// returnedPromise.then(res=>{
//     console.log(res);
// })

// (function returnRes(){
//     returnedPromise.catch(err=>{
//         document.getElementById("alert").textContent=err;
//     })
//     return;
// }());

//promise all 

let promise1 = Promise.resolve(5);
let promise2 = 44;

Promise.all([promise1,promise2]).then(function(values){
    console.log(values);
})

//async

function tryAsync(){
    setTimeout(()=>{console.log("Async in progress")},1000)
}

tryAsync();

//create a promise
//use async/await to catch the promise and log it out

function helloWorld(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{resolve("hello world")},300)
    })
}

async function msg(){
    const msg = await helloWorld();
    console.log(msg);
}

msg();