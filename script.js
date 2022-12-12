console.log(typeof [1,2,3])
console.log(typeof "John");
console.log(typeof 3);
console.log(typeof true);
console.log(typeof Hksa678);



   //DOGAGE

let dogAge =prompt ("Enter your dog age");
let age =parseInt(dogAge)

function convert (age){
    let dogToHumanAge = (age*7)
    console.log ("Your dog have", dogToHumanAge, "human years")
}
convert (age)


//HUMANTODOGAGE


let humanAge =prompt ("Enter your age");
let ages =parseInt(humanAge)

function change (ages){
    let humanToDog = (ages/7)
    console.log ("You have ", humanToDog, "dog years" )
}
change (ages)


//2 del od domasna


let money = prompt("Enter money");
let cash =parseInt(money);

function getMoney (cash,){
  let account= 10000 ;
  let toget =(account-cash)

  if (cash>account){
    console.log ("Not enough money")}
    else {
        console.log ("On your account you have:", toget, "denars")
}
  
}
getMoney (cash)






