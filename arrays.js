// array of marks
let marks = [44,34,67,34,90,89];
for (let i=0;i<marks.length;i++)
{
    console.log(marks[i]);

}
// for -of loop
for ( let mark of marks)
{
    console.log(mark);
}

// array splice
arrayS= [0,1,2,3,4,5,6];
// add an element
arrayS.splice(2,0,101);  
console.log(arrayS.toString()); //output: 0,1,101,2,3,4,5,6
// Delete an element
arrayS.splice(2,1);  
console.log(arrayS.toString()); //output: 0,1,2,3,4,5,6
// update
arrayS.splice(2,1,900);  
console.log(arrayS.toString()); //output: 0,1,900,3,4,5,6
// splice acts like a slice if you pass only index
arrayS.splice(3);
console.log(arrayS.toString()); //output: 0,1,900
// practice
let companies =["Bloomberg","Microsoft","Uber","Google","IBM","Netflix"];
// Remove first company
companies.splice(0,1);
// Remove Uber and add ola in it's place
companies.splice(2,1,"Ola");
// Add amazon at the end
companies.splice(5,0,"Amazon");
console.log(companies.toString());