const getDataPromise = (num) => new Promise((resolve, reject) => {
   setTimeout(() => {
      typeof num === 'number' ? resolve(num * 2) : reject('number must be provided')
      // resolve(`this is the promise data: ${data}`);
      // reject('this is my promise error')
   }, 2000);
});

const processData = async () => {
   let data = await getDataPromise(2);
   data = await getDataPromise(data);
   data = await getDataPromise(data);
   return data;


}

processData().then((data) => {
   console.log('Data', data);
}).catch((err) => {
   console.log('Error', err);
})
