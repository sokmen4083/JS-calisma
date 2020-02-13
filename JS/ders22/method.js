//08.02.2020




function filterUnWantedChars(auto){                                       
    if(auto.includes(";)")){
        return false;
    }
    return true;
};

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


function findAutosWithTwoOs(auto){
    let numberOfOs = findNumberOfChar(auto, "o");
    if(numberOfOs == 2){
        return true;
    }
    return false;
};
