let hayvan = ["koyun","inek","tavuk","domuz","tavuk","inek"];
let toplamAyakSayisi = 0;
for( j=0;j<hayvan.length;j++){
	if(hayvan[j] =="inek"){
		toplamAyakSayisi = toplamAyakSayisi + 4;
	}
	if(hayvan[j] == "koyun"){
		toplamAyakSayisi = toplamAyakSayisi + 4;
	}
	if(hayvan[j] == "tavuk"){
		toplamAyakSayisi = toplamAyakSayisi +2;
	}
 
} 
console.log("toplam",toplamAyakSayisi);





