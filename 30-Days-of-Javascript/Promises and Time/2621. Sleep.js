/**
 * @param {number} millis
 * @return {Promise}
 */
async function sleep(millis) {
    return new Promise((resolve,reject) => {

       // yaha pe may  ye v kar ska hu👇👇👇
        //setTimeout(() => {
          //  reslove(millis);

        //}, mills)


        setTimeout(resolve, millis);
    })
    
}



/** 
 * let t = Date.now()
 * sleep(100).then(() => console.log(Date.now() - t)) // 100
 */