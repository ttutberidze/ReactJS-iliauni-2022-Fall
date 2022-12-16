const asyncPrint = (user) => {
    const myPromise = new Promise((resolve, reject) => {
        setTimeout(() => {
            try {
                resolve(user.name);
            }
            catch(e) {
                reject(e.message)
            }
        }, 2000)
    });
    return myPromise;
}



const main = async () => {
    const username1 = await asyncPrint({name: 'James Bond'});
    console.log('username 1', username1)
    const username2 = await asyncPrint({name: 'Jack Bond'});
    console.log('Username 2', username2)
}

main();


// const asyncPrint = (user) => {
//     const myPromise = new Promise((resolve, reject) => {
//         setTimeout(() => {
//             try {
//                 resolve(user.name);
//             }
//             catch(e) {
//                 reject(e.message)
//             }
//         }, 2000)
//     });
//     return myPromise;
// }

// const myPromise1 = asyncPrint({name: 'James Bond'});



// myPromise1.then((response) => {
//     const myPromise2 = asyncPrint({name: 'Jack Bawer'});
//     myPromise2.then(response => {
//         console.log('second promise', response)
//     })
//     console.log('First then', response);
//     return response;
// }).then((response) => {
//     console.log('Second then', response)
// }).catch((errorMessage) => {
//     console.log('Error was found', errorMessage)
// }).finally(() => {
//     console.log('Finally')
// })