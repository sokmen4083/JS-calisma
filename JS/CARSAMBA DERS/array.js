let sayilar = [21,2,13,19,4,25];
//sayilar.pop();console.log(sayilar);
//sayilar.push(15,42);console.log(sayilar);
//let rakam = sayilar.join("+");console.log(rakam);


let toplam = 0;
for(let a = 0; a < sayilar.length; a++){
toplam += sayilar[a];
// toplam = toplam + sayilar[a];
}
console.log(toplam);


average = toplam / sayilar.length;
console.log(average);

min = sayilar[0];
mak = sayilar[0];

for(let i = 0; i < sayilar.length; i++){
if(sayilar[i] > mak)
{
mak = sayilar[i];
}
if(sayilar[i] < min)
{
min = sayilar[i];
}
}

console.log("Dizi icindeki en buyuk sayi .........." +mak);
console.log("Dizi icindeki en kucuk sayi .........." +min);

tek = sayilar[0];
for(let t = 0; t < sayilar.length; t++){
if(sayilar[t] % 2 == 1)
//if(sayilar[t] % 2 != 0)
//if (sayilar[t] & 1)
{
tek = sayilar[t];
console.log("Dizinin icindeki tek sayılar......." +tek);
}
}



cift = sayilar[0];
for(let t = 0; t < sayilar.length; t++){
    if(sayilar[t] % 2 == 0)
    //if(sayilar[t] % 2 != 1)
    
    {
    cift = sayilar[t];
    console.log("Dizinin icindeki cift sayılar......." +cift);
    }
    }





















