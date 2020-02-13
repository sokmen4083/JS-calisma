/*function myFunction() {
    let sayilar = [5,10,15,20,25];
    let x = document.getElementById("demo");
    x.innerHTML = sayilar.join(" + 5 =");
} */
/*let numbers = [4, 9, 16, 25,36,49,64];

function myFunction() {
  x = document.getElementById("demo")
  x.innerHTML = numbers.map(Math.sqrt);//karesi olan sayıların bulumu
}
let ages = [32, 33, 16, 40];

function checkAdult(age) {
  return age >= 18;
}

function myFunction() {
  document.getElementById("demo").innerHTML = ages.filter(checkAdult);
}
let x = Math.PI ;
 
    document.getElementById("Pidemo").innerHTML = x;

    let y = Math.sqrt(49);
    document.getElementById("kkdemo").innerHTML = y;

    let a = Math.pow(2,5);
    document.getElementById("ussayi").innerHTML = a;
*/
    
let sayilar =[5,7,9,15,24,54]
console.log(Math.min.apply(Math, sayilar));
console.log(Math.max.apply(Math, sayilar));


function myFunction() {
        document.getElementById("demo").innerHTML = Math.min.apply(Math, sayilar);

      }
      function myFunction2() {
        document.getElementById("democ").innerHTML = Math.max.apply(Math, sayilar);

      }