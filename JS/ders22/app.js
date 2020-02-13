let cars = ["audi","bmw","ford","opel","fiat","honda","toyota","renault","tesla","volvo",
"skoda","nissan","ferrari","vw","alfa romeo","mitsubishi","TOGG;)"];

let realCars = cars.filter(filterUnWantedChars);

output("<strong>Araba karakteri tasimayan arabalari;) filtreleyiniz.</strong><br>" + realCars);
let carIncludingCharO = realCars.filter(filterCarsIncludingCharO);
output("<br><br>");
output("<strong>Icinde 'o' harfi gecen arabalari ve bu arabalarin sayisini bulun.</strong><br>" + carIncludingCharO);
output("<br><strong>Kac tane: </strong>" + carIncludingCharO.length);



let carsContianingTwoOs = realCars.filter(findAutosWithTwoOs);
output("<br><br>");
output("<strong>Icinde iki defa 'o' harfi gecen arabalarin sayisini bulun.</strong><br>" + carsContianingTwoOs);









