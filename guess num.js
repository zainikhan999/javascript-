let gamenum=45;
let usernum=prompt("guess correct number");
console.log(usernum)
while(usernum != gamenum)
{
    // don't use !== as prompt returns string it can't be matched
    let usernum=prompt("guess number again");
    
}
   alert("you guessed the correct one");