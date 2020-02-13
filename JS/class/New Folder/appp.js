
let cars = ["audi", "bmw", "ford", "opel", "fiat", "honda", "toyota", "renault", "tesla", "volvo", 
"skoda", "nissan", "ferrari", "vw", "alfa romeo", "mitsubishi", "TOGG;)"];


let realCars = cars.filter(CarDealerSearchEngine.filterUnwantedChars);
output("<strong>Araba karakteri tasimayan arabalari;) filtreleyiniz.</strong><br>" + realCars);


let carsIncludingCharO = realCars.filter(CarDealerSearchEngine.filterCarsIncludingCharO);
output("<br><br>");
output("<strong>Icinde 'o' harfi gecen arabalari ve bu arabalarin sayisini bulun.</strong><br>" + carsIncludingCharO);
output("<br><strong>Kac tane: </strong>" + carsIncludingCharO.length);

let carsContianingTwoOs = realCars.filter(CarDealerSearchEngine.findAutosWithTwoOs);
output("<br><br>");
output("<strong>Icinde iki defa 'o' harfi gecen arabalarin sayisini bulun.</strong><br>" + carsContianingTwoOs.length);




