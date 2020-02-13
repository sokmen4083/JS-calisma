
//cozum 0 ın fonksiyonu
function filterUnWantedChars(auto){ 
    if(auto.includes(";)")){
        return false;
    }
    return true;
};



//cozum 1 in fonksiyonu
function filterCarsIncludingCharO(auto){
    if(auto.includes("o")){
        return true;
    }
    return false;
}
function findNumberOfChar(text, char){
    let anArray = text.split("")
    let charArray = anArray.filter(function(harf){
        if(harf == char){
            return true;
        }

        return false;
    });

    return charArray.length;
}





//cozum 2 in fonksiyonu
function findAutosWithTwoOs(auto){
    let numberOfOs = findNumberOfChar(auto, "o");
    if(numberOfOs == 2){
        return true;
    }
    return false;
};





//cozum 3 ün fonksiyonu
function uzn5(auto) {
    if (auto.length < 5) {
       return true; 
    }
    return false;
}
    




//cozum 4 ün fonksiyonu
function firstLetterOfF (auto){
    if(auto.startsWith("f")){
        return true;
    }
    return false;
}
function lastLetterOFx(auto) {
    let anArray = auto.split('');
    anArray[(auto.length -1)] = 'x';
    return anArray.join('');
}



//cozum 5 in fonksiyonu
function uzn36(auto) {
    if (auto.length < 6 && auto.length > 3) {
       return true; 
    }
    return false;
}
function aaaa(auto) {
    if(auto.includes("a")){
        return true;
    }
    return false;
}
function favori(auto) {
    auto =`myfavorite ${auto}`;
    return auto;
}





//cozum 6 ın fonksiyonu
function krkoa(auto) {
    if(auto.includes("a") || auto.includes("o")){
        return true;
    }
    return false;
}




//cozum 7 in fonksiyonu
function krkoi(auto) {
    if(auto.includes("i") || auto.includes("o")){
        return true;
    }
    return false;
}
