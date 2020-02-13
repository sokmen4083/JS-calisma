let islerim = ["Yataklari düzelt", "(x) Evi süpür", "Camasirlari yika", "(x) Yemegi yap", "Alisverise git", "Cocugu okuldan al"];

let bitenisler = 
    islerim.filter(function(isler){
        return isler  == "x";
    })

let bitmeyenisler =  
    islerim.filter(function(isler){
        return isler ;
    })




let ekranabasss = function(isler){
    console.log(isler);
}