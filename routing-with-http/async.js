console.log('First');

setTimeout(() => {
    console.log('timeout')
}, 0)

Promise.resolve().then(() => console.log('pr'))

console.log('Second');

// user = {name: 'Temo'}
const printAsync = (user) => {
    return new Promise((resolve, reject) => {
        setTimeout(function () {
            try {
                resolve(user.name)
            } catch(error) {
                reject(error)
            }
        }, 5000);
    })
}

const mainFunc = async () => {
    console.log(await printAsync({name: 'Temo'}));
    console.log(await printAsync({name: 'Lasha'}));
}

mainFunc()

Promise.all([printAsync({name: 'Temo'}), printAsync({name: 'Lasha'})])
    .then(console.log)
    .catch(error => console.log(error.message))

// printAsync({name: 'Temo'})
//     .then(console.log)
//     .catch(error => console.log(error.message))

// printAsync({name: 'Lasha'})
//         .then(console.log)
//         .catch(error => console.log(error.message))
