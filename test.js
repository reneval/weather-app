// PENDING RESOLVED REJECTED

console.log("1.start")

const myPromise = new Promise(resolve => {
    setTimeout(()=>resolve("2. resolved"), 0)
})

myPromise
    .then(data=>{console.log(data)})

console.log("3.end")