let cars = ["audi","bmw","ford","opel","fiat","honda","toyota","renault","tesla","volvo",
"skoda","nissan","ferrari","vw","alfa romeo","mitsubishi","TOGG;)"];

//cozum 0
let realCars = cars.filter(filterUnWantedChars);
output("<strong>Araba karakteri tasimayan arabalari;) filtreleyiniz.</strong><br>" + realCars);


//cozum 1
let carIncludingCharO = realCars.filter(filterCarsIncludingCharO);
output("<br><br>");
output("<strong>Icinde 'o' harfi gecen arabalari ve bu arabalarin sayisini bulun.</strong><br>" + carIncludingCharO);
output("<br><strong>Kac tane: </strong>" + carIncludingCharO.length);


//cozum 2
let carsContianingTwoOs = realCars.filter(findAutosWithTwoOs);
output("<br><br>");
output("<strong>Icinde iki defa 'o' harfi gecen arabalarin sayisini bulun.</strong><br>" + carsContianingTwoOs.length);
output("<br><br>");
output("<strong>Icinde iki defa 'o' harfi gecen arabalar </strong><br>" + carsContianingTwoOs);


//cozum 3
let numberOf = realCars.filter(uzn5);
output("<br><br>");
output("<strong>Araba isim uzunlugu 5'den kücük olan arabalar</strong><br>" + numberOf);


//cozum 4
let firstletterF = realCars.filter(firstLetterOfF);
output("<br><br>");
output("<strong>Ilk harfi 'f' olan arabalar</strong><br>" + firstletterF);
let firstletterx = firstletterF.map(lastLetterOFx);
output("<br><br>");
output("<strong>Son harfi 'x' olan arabalar</strong><br>" + firstletterx);


//cozum 5
let uzunluk3and6 = realCars.filter(uzn36); 
output("<br><br>");
output("<strong>Uzunlugu 3 ile 6 arasinda olan arabalar</strong><br>" + uzunluk3and6);
let uzunluk3and6aaa = uzunluk3and6.filter(aaaa);
output("<br><br>");
output("<strong>Uzunlugu 3 ile 6 arasinda olan arabalardan isminin icinde 'a' harfi olanlar</strong><br>" + uzunluk3and6aaa);
let myfavorite = uzunluk3and6aaa.map(favori);
output("<br><br>");
output("<strong>Uzunlugu 3 ile 6 arasinda olan arabalardan isminin icinde 'a' harfi olanlar , isimlerinin önüne 'my favorite' gelecek sekilde</strong><br>" + myfavorite);



//cozum 6
let karakterOA = realCars.filter(krkoa);
output("<br><br>");
output("<strong>Ismi icinde 'o' veya 'a' gecen arabalar</strong><br>" + karakterOA);
output("<br><br>");
output("<strong>Ismi icinde 'o' veya 'a' gecen arabaların sayısı</strong><br>" +karakterOA.length);
let reducer = (accumulator, currentValue) => accumulator + currentValue;
let karakteroveyaa = karakterOA.reduce(reducer);
output("<br><br>");
output("<strong>Ismi icinde 'o' veya 'a' gecen arabalarin toplam karakter sayisi</strong><br>" + karakteroveyaa.length);




//cozum 7
let karakterOI = realCars.filter(krkoi);
output("<br><br>");
output("<strong>Ismi icinde 'o' veya 'i' gecen arabalar</strong><br>" + karakterOI);
output("<br><br>");
output("<strong>Ismi icinde 'o' veya 'i' gecen arabaların sayısı</strong><br>" +karakterOI.length);
let reducer2 = (accumulator, currentValue) => accumulator + currentValue;
let karakteroveyai = karakterOI.reduce(reducer2);
output("<br><br>");
output("<strong>Ismi icinde 'o' veya 'i' gecen arabalarin toplam karakter sayisi</strong><br>" +karakteroveyai.length);



