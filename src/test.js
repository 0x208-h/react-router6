const str = '1234567890'
console.log(str.replace(/([1-9]\d{0,2})(?=(\d{3})+$)/g,'$1,'))

const promise1 = Promise.resolve(3);
const promise2 = new Promise((resolve, reject) => setTimeout(reject, 100, 'foo'));
const promises = [promise1, promise2];

// Promise.allSettled(promises)
//   // .then((results) => results.forEach((result) => console.log(result)));
//   .then((results) => console.log(results, 'results'))

// Promise.any(promises)
//   .then(res =>  console.log(res,'res'))
//   .catch(err => console.log(err, 'err'))


  const pErr = new Promise((resolve, reject) => {
    reject("总是失败");
  });
  
  const pSlow = new Promise((resolve, reject) => {
    setTimeout(resolve, 500, "最终完成");
  });
  
  const pFast = new Promise((resolve, reject) => {
    setTimeout(resolve, 100, "很快完成");
  });
  
  Promise.any([pErr, pSlow, pFast]).then((value) => {
    console.log(value);
    // pFast fulfils first
  })

  
  