let dikdortgenOlanlar = [7,5,2,8,10,20,7,21,12,10,6];

let daireOlanlar = [6,23,19,0,200,156];

let kupHacimleri = [2,6,1,4,13,-1];

//Verilen Dikdörtgenlerin Alani
let toplamDikdörtgenAlanı = 0;
for(let i = 0; i < dikdortgenOlanlar.length/2 ;i++){
    if(dikdortgenOlanlar[2*i +1]!= undefined){ 
        toplamDikdörtgenAlanı += dikdörtgenAlani(dikdortgenOlanlar[2*i],dikdortgenOlanlar[2*i+1]);
    
        }
}
console.log("Dikdörtgenlerin Toplam Alanı",toplamDikdörtgenAlanı);

//Verilen Dairelerin Alani
let toplamDaireAlanı = 0;
for(let k = 0; k < daireOlanlar.length; k++){
toplamDaireAlanı += daire(daireOlanlar[k]);
}
console.log("Dairelerin Toplam Alanı",toplamDaireAlanı);

//Verilen Küplerin Hacmi
let toplamKüplerinHacmi = 0;
for(let l = 0; l < kupHacimleri.length; l++){
    if(kupHacimleri[l] > 0){
    toplamKüplerinHacmi += Küp(kupHacimleri[l]);   
}
}
console.log("Küplerin Toplam Hacmi",toplamKüplerinHacmi);