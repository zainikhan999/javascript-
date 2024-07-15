const Student=
{
    fullName : "David Jackson",
    age : 20,
    cgpa : 3.40,
    isPass:true,

};
console.log(Student.age);
console.log(Student["cgpa"]);
Student["age"]=Student["age"]+1;
console.log(Student["age"]);
Student["fullName"]="James Martin";
console.log(Student["fullName"]);
Student["age"]=30;
console.log(Student["age"]);
if (Student["age"]==90)
    console.log("age is 90");
else
   console.log("age is not 90");
for (let i in Student)
    console.log(i);