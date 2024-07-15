// sum of 2 numbers 
function sum(num1,num2)
{
    let sum_of_numbers= num1+num2;
    return sum_of_numbers
}

answer=sum(34,7);
console.log(answer);
// arrow functions 
const mul = (num1,num2) => {
    return num1*num2;
};
ans=mul(2,3);
console.log(ans);
// arrow function is a simple variable where we can give any value in future
// practice
function vowel (stringname)
{
     let count=0;
     for (chrc of stringname)
     {
        if (chrc== "i"||chrc=="a" || chrc=="e" || chrc=="i"  || chrc=="o" || chrc=="u")
        count++;
     }
     return count;
}

stringname="by";
number_of_vowels= vowel(stringname);
console.log(number_of_vowels);
// callback function
let array=["Rawalpindi","Lahore","Islamabad","Karachi"];
array.forEach((val)=>{
    console.log(val.toUpperCase());
});
// print the sqaure of the number using the forEach loop
let numbers=[1,3,5,4,2,7];
numbers.forEach((nums) =>
{
    console.log(nums*nums);
}

);
// passing function 
let calsquare=(num) =>
    {
        return num*num;
    };
numbers.forEach((num)=>
{
    console.log(calsquare(num));
}
);
// map
let newarray=numbers.map((val)=>
{
    return val * val;
});
console.log(newarray);
let arr=[1,4,7,9,8];
let evenarr= arr.filter((val)=>
{
    return val % 2 !==0;

});
console.log(evenarr);
// filter

// reduce
let sumArray= arr.reduce((res,curr)=>
{
    return(res+curr);
});
console.log(sumArray);







