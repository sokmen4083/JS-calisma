
class CarDealerSearchEngine{

    static filterUnwantedChars(auto){
        if(auto.includes(";)")){
            return false;
        }
        return true;
    };
    
    static filterCarsIncludingCharO(auto){
        if(auto.includes("o")){
            return true;
        }
        return false;
    }
    
    static findNumberOfChar(text, char){
        let anArray = text.split("")
        let charArray = anArray.filter(function(harf){
            if(harf == char){
                return true;
            }
    
            return false;
        });
    
        return charArray.length;
    }
    
    static findAutosWithTwoOs(auto){
        let numberOfOs = CarDealerSearchEngine.findNumberOfChar(auto, "o");
        if(numberOfOs == 2){
            return true;
        }
        return false;
    }

}


