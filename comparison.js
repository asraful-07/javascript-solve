// console.log(5 < 10);

/*
// if and else

// 1st
var switte = 120;

if(switte < 200){
    console.log('mama give me some switte')
}
else{
    console.log('no thank you mama')
}

// 2nd
const salary = 40000;
const isBcs = true;
const hight = 68;

if(salary > 30000 && hight > 66){
    console.log('aso kobol baba')
}
else{
    console.log('vag tui')
}

*/

const age = 70;
const price = 100;

if(age <= 12){
   console.log('free eating food');
}
else if(age >= 40 && age <= 59){
   //  10% discount 
   const discount = price * 10 / 100;
   const payAmount = price - discount;
   console.log(payAmount);
}
else if(age >= 60){
    //  20% discount 
    const discount = price *20 / 100;
    const payAmount = price - discount;
    console.log(payAmount);
 }
else{
    console.log(price);
}
