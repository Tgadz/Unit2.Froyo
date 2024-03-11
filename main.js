//Create prompt for user
const inputOrder = prompt(
  'Please order your foryo flavors here! P.S. seperate your order with commas.',
  'vanilla,vanilla,vanilla,strawberry,coffee,coffee'
  );

//turn prompt into an array
const arrayOrder = inputOrder.split(",");


//create function to assign value to flavors
const promptFlavors = (array) => {
  const objFlavors = {}
  //loop through array 
  for(let i=0; i < array.length; i++) {
    //if flavor has not been used assign value of 1  
    if(!objFlavors[array[i]]) {
      objFlavors[array[i]] = 1
      //if flavor has already been used, add 1 to value        
    } else {
      objFlavors[array[i]]++
    }
  }
  return objFlavors
}
//log out the results.. table is prettier than log
console.table(promptFlavors(arrayOrder))


//previous code but found a better method where i dont have to hard code each keyword

// const flavors = {
//   vanilla: 'vanilla',
//   strawberry: 'strawberry',
//   coffee: 'coffee',
//   chocolate: 'chocolate',
// };


// const orders = [];
// for( let i=0; i < arrayOrder.length; i++) {
//   let str = arrayOrder[i];
//   orders.push(str);
//   console.log(flavors[str])
// }