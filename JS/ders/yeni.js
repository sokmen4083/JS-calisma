/*let numbers = [30,2,13,45,100];
let rakam = [3,22,39,16,5,36];
// yeni bir eleman nasıl eklenir
//numbers[5] = 4;
//numbers[6] = 8;

//uzunlugu bilinmeyen arrayın sonuna nasıl eleman eklenir 
//numbers[numbers.length] = 12;


numbers.push(300);
//console.log(numbers,numbers.length);

//Sayiyi bastan ekleme nasıl olur? -20
//numbers[0] = -20;
//for(let index = numbers.length - 1; index > -1; index--){numbers[index + 1] = numbers[index];}
//numbers[0] = -10;
//console.log(numbers);



numbers.unshift(-10);
//console.log(numbers);

//console.log(numbers.concat(rakam)); //iki arrayi birlestirme

//push x pop 
//unshift x shift 
//splice

//includes 
//slice 
//fill

console.log(numbers,numbers.length);

//let ensondakieleman = numbers.pop();

//console.log("arrayden cıkan eleman",ensondakieleman);

numbers.pop();
numbers.shift();
numbers.splice(2,2,33,99,999);
console.log(numbers,numbers.length);

let buldunMu = numbers.includes(999);//true/false

if(buldunMu == true){
    console.log("Evet Var")
}else{
    console.log("Schade, hayır yok")

}

//console.log("sıralamasi,",numbers.sort())

values = [];
for(let x = 0; x < 10; x++){
values.push([
    2 ** x,
    2 * x ** 2
])
}
console.table(values);
console.log(values);*/