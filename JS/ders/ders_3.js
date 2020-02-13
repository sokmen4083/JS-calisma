//01.2.2020 
/*function showMessage() {
    alert("Hello everyone");
}
showMessage();

function checkAge (age) {
    if(age > 18){
        return true;
    }
    return confirm("Did parents allow you");
}
checkAge(19);
function sendEmail(from,to,cc,bcc,message) {
    console.log("Your message has been sent");
    console.log(from,to,cc,bcc,message);
}
sendEmail(sokmen4083gmailcom,mehmetsokmen2712gmailcom,cc,bcc,message);*/


//05.02.2020
let islerim = ["Yataklari düzelt","(x) Evi Süpür","Camasırlari yika","(x) Yemegi Yap","Alisverise git","Cocuğu okuldan al"]

function print(arr = [],title) {
    console.log(`########## ${title} ###############`)
    arr.forEach(function(a) {
        document.write(a);
        console.log(a);
            
        });
    }

    //camel case
    //biten isler
    function bitmisIsleriBul(){
        const bitmisIsler= islerim.filter(function (item) {
        
            return item.includes('(x)')
        });
    return bitmisIsler;
    }
    bitmisIsleriBul();


    function bitmemisIsleriBul(){
        const bitmemisIsler= islerim.filter(function (item) {
            return !item.includes('(x)')
        });
        return bitmemisIsler;
    }
    bitmemisIsleriBul();

    function butunIslerBitir(){
        const butunIsler= islerim.map(function (item) {
            if(!item.includes('(x)')){
             item = `(x)  ${item}`;
            }
            return item;
        });
return butunIsler;

    
    }

function islerBittiMi() {
    const isler = butunIslerBitir();
    const cevap =  isler.every(a => a.includes ('(x)') );
return(cevap == true) ? "EVET" : "HAYIR"

    
}



    print(bitmisIsleriBul(), 'BITMIS ISLER');
    print(bitmemisIsleriBul(), 'BITMEMIS ISLER');
    print(butunIslerBitir(), 'BUTUN ISLER BITTI');
    console.log('İslerin Hepsi bitti mi', islerBittiMi());


    setInterval(function(){
        console.log('İslerin Hepsi bitti mi', islerBittiMi());
    } ,3000 )
