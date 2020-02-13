let islerim = ["Yataklari düzelt","(x) Evi Süpür","Camasırlari yika","(x) Yemegi Yap","Alisverise git","Cocuğu okuldan al"]
class Evhanimi{


    //camel case
    //biten isler
    static bitmisIsleriBul(){
        const bitmisIsler= islerim.filter(function (item) {
        
            return item.includes('(x)')
        });
    return bitmisIsler;
    }
    


    static bitmemisIsleriBul(){
        const bitmemisIsler= islerim.filter(function (item) {
            return !item.includes('(x)')
        });
        return bitmemisIsler;
    }

    static butunIslerBitir(){
        const butunIsler= islerim.map(function (item) {
            if(!item.includes('(x)')){
             item = `(x)  ${item}`;
            }
            return item;
        });
return butunIsler;

    
    }

static islerBittiMi() {
    const isler = Evhanimi.butunIslerBitir();
    const cevap =  isler.every(a => a.includes ('(x)') );
return(cevap == true) ? "EVET" : "HAYIR"}


}
    
