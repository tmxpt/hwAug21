function arrayOfNumbers(end = 200) {
    const nums = [];
    for (let i = 1; i <= end; i++) {
      nums.push(i);
    }
    return nums;
  }

  const tilHund=arrayOfNumbers()
  console.log(tilHund);
  // using reduce, sum the numbers from 1 to 200
  // hint: use the arrayOfNumbers() function to generate an array
  let myTotal= tilHund.reduce((runningTotal,arr)=>runningTotal+=arr,0)
  
  console.log(myTotal);

  let newTotal=0;
  console.log(newTotal);
  for(i=0;i<201;i++){
    newTotal+=i;
    //if(i%50===0){console.log(` 1 thru`,i,newTotal)}
  }
  
  if(myTotal===newTotal){
      console.log(`it worked bri`)
  }
  