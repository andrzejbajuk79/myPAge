new Promise((resolve, reject) => {
reject(new Error('no buears'));
	setTimeout(() => {
		console.log(1);
		resolve();
	}, 2000);
}).then(() => {
	console.log(2);
	console.log(3);
})
.catch(error =>{
  console.log('error',error);

})