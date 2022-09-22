function checkPrime(num){
	let isPrime=true;
	for(let i=0; i<num; i++){
		if(num%i==0){
			isPrime=false;
			break;
		}
	}
	return isPrime;
}

let x= checkPrime(13);

if(x){
console.log("Is Prime");
} else {
console.log("Is Not Prime");
}