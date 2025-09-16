
async function sleep(millis) {
    return new Promise(resolve=>{
        setTimeout(()=>{
        resolve(millis)
        },millis)
        // setTimeout(resolve,millis)
    })
}

let t = Date.now()//declear the real time
sleep(100).then(() => console.log(Date.now() - t))