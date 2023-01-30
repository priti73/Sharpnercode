// answer-2
const fruits= ['apple', 'oranges' , ' ', 'mango', ' ' , 'lemon'];
const newFruits=fruits.map(function(t)
{
    if(t==' '){
        return 'empty string';
    }
    else{
        return t;
    }
}
)
console.log(newFruits);
//answer-3
/*Refference type, it only stores an address pointing at placing memory where that array is stored and 
 pointer for this address has not change by adding new elements to this array. so things stored in this 
 constant is just a pointer(address) .Address is not changed so const value is not changed */


 //answer-4
  //it is used to make copy of reffernce object
  //extend key- values pairs in array or object
  // to modify existing values
  // it creates new object 


 // answer-5
 //it is used to merge multiple arguments in a array

 //const obj1 = {'key1': 1 , 'key2' : 2}

/*const obj2 = { ...obj1, key1: 1000}



console.log(obj1) //{'key1': 1 , 'key2' : 2}

console.log(obj2)  //{'key1': 1000 , 'key2' : 2}*/

 const obj1 = {'key1': 1}

const obj2 = { ...obj1}
const obj3=obj1;
 function check(obj2,obj1){
if(obj2 === obj1){

console.log('same objects')

}

else{

console.log('different objects')

}
}
check(obj2,obj1); //different objects
check(obj3,obj1);//same objects