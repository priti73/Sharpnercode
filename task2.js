//ARROW FUNCTION
const multilply = (num1,num2) => num1*num2;
console.log(multilply(5,6));

//student object using normal function
const student={
    name:'Priti',
    age: 21,
    marks:78,
    greet : function() 
    {
        console.log('Hii, I am '+ this.name); // Hii, I am  Priti 
        return function print()
        {
             console.log('Hello, I am '+ this.name); // Hello, I am  undefined
        }  
    }
}
student.greet()();
// using arrow function
const student1={
    name:'Priti',
    age: 21,
    marks:78,
    greet : function ()
    {
        console.log('Hii, I am '+ this.name); // Hii, I am  Priti 
        return () =>
        {
             console.log('Hello, I am '+ this.name); // Hello, I am  Priti
        }  
        //if we use arrow function instead of normal function then this will refer to current object's parent for  finding the values
    }
}
student1.greet()();



