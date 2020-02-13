
class hesaplama{ 
    static daire(yaricap){
        let Alan =Math.round(Math.PI*Math.pow(yaricap,2));
        return Alan;
        }
        
        
    static dikdörtgenAlani(KisaKenar,UzunKenar){
        let dAlan = KisaKenar*UzunKenar;
        return dAlan;
        }
        
        
    static dairecevre(r){
        let cevre = Math.round(2*Math.PI*r);
        return cevre;
        }
        
        
    static dikdörtgenCevresi(KisaKenar,UzunKenar){
        let cevre = 2*(KisaKenar + UzunKenar);
        return cevre;
        }
        
        
    static Küp(kenar){
        let hacim = Math.pow(kenar,3);
        return hacim;
        }
        
        
    static Küpa(knr){
        let alan = 6*Math.pow(knr,2);
        return alan;
        }
    } 