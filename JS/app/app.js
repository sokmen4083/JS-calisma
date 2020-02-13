let altLimit = 1;
let ustLimit = 90;
let a = 3;
let b = 4;
let toplam = 0;

for(altLimit = 1;altLimit<ustLimit;++altLimit){
let kalanA = altLimit % a;
let kalanB = altLimit % b;
  
    if(kalanA == 0 && kalanB == 0){
        
        console.log("bolen sayilar" ,altLimit);
        toplam += altLimit;
}
}

console.log("sayilarin toplami",toplam);