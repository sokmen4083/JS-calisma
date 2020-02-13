
//DEFINITION
function add(num1,num2) {
    let sonuc = num1 + num2;
    return sonuc;
}
//CALL
let toplam = add(4,8);
let  baskaToplam = add(5,12);
let toplam2 = add(toplam,baskaToplam);


//let yeniToplam = add(5,add(5,add(3,6)));
console.log("Toplam ", baskaToplam,toplam,toplam2);

//uzunKenar = Karakok(birKenar2 +ikincikenar2);

function karesi(sayi) {
    return Math.pow(sayi,2);
}

function kok(sayi) {
    return Math.sqrt(sayi);
}


let kenar1 = 3;
let kenar2 = 4;

let uzunKenar = Math.sqrt(Math.pow(kenar1,2) + Math.pow(kenar2,2));
let uzunKenar3 = kok(karesi(kenar1) + karesi(kenar2));

console.log("uzun kenar",uzunKenar,uzunKenar3);





