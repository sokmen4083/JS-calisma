/*let kacTaneElaman = 0;
for(let x = 0; x < 10; x++){
for(let y = 0; y < 10; y++){
console.log("(", x, "," ,  y,")");
kacTaneElaman++;
}
}
console.log("Bu dongude ", kacTaneElaman, "nokta olusturuldu");

let a = 5;
let b = 8;
let c = 0;
let k = 300;
let Array = [c];
for(c = 1; c<k; c++){
    let kalanA = c % a;
    let kalanB = c % b;
if(kalanA == 0 && kalanB == 0){
    console.log(c);
    
console.log(Array[3]);

    
}  

} 
*/
/*
Bit Array;
0110  = 2**0*0 + 2**1*1 + 2**2*1 + 2**3*0 = 6;
0111 = 7;

String
let text = "ben bir textim";//harf dizisi,char dizisi
*/
/*

let numbersArray = [1,2,3,4,5,]; 
console.log(numbersArray.length);

for(let a = 0; a<numbersArray.length; a++){
console.log(numbersArray[a]);
}

*/
let bosDizi = [];   //   0       1        2          3        4       5          6
let gunIsimleri = ["Pazartesi","Sali","Carsamba","Persembe","Cuma","Cumartesi","Pazar"];

//console.log("Hfatanin 3.gunu", gunIsimleri[2]);
//console.log("Arrayin Buyuklugu", gunIsimleri.length);

/* traversing an array,iterating on an array
console.log(gunIsimleri[0]);
console.log(gunIsimleri[2]);
console.log(gunIsimleri[4]);
console.log(gunIsimleri[6]);
*/
/*
for(let index =0; index < gunIsimleri.length; index = index +2){
    console.log(gunIsimleri[index]);
}   // haftanin tek günleri
*/
/*
for(let index =0; index < gunIsimleri.length; index++){
    console.log(gunIsimleri[index]);
}   // haftanin günleri
*/

/*
for(let index =0; index < gunIsimleri.length; index++){
    let day = gunIsimleri[index];
if(index > 3){
console.log(day);
      }
    
}   
*/

for(let index =0; index < gunIsimleri.length; index++){
    let day = gunIsimleri[index];
if(day.includes("e") == true){
console.log(day);
      }
    
}   // elemanların içinde hangi harf var onu sorguladik








































