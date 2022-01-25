import { Component, OnInit } from '@angular/core';
import { Sorular } from 'src/app/sorular';
import { Kayit } from 'src/app/models/kayit';
import { Sonuc } from 'src/app/models/sonuc';
import { DataService } from 'src/app/services/data.service';
@Component({
  selector: 'app-test1',
  templateUrl: './test1.component.html',
  styleUrls: ['./test1.component.css']
})
export class Test1Component implements OnInit {

  kayitlar:Kayit[];
  secKayit:Kayit=new Kayit();
  sonuc:Sonuc=new Sonuc();
  
   constructor(
     public servis:DataService
   ) { }
  
    ngOnInit(): void {
      this.KayitListele();
      this.secKayit.id=0;
    }
  
    KayitListele(){
  this.servis.KayitListele().subscribe((d:Kayit[])=>{
    this.kayitlar=d;
  });
    }
  
    Kaydet(){
      var tarih=new Date();
      if(this.secKayit.id==0){
        this.secKayit.id=Math.floor(Math.random()*1000);
        this.secKayit.kayTarih=tarih.getTime().toString();
        this.secKayit.duzTarih=tarih.getTime().toString();
        
        this.servis.KayitEkle(this.secKayit).subscribe(d=>{
      this.sonuc.islem=true;
      this.sonuc.mesaj="Kayıt Eklendi";
      this.KayitListele();
      this.Vazgec();
      },err=>{
        this.sonuc.islem=false;
        this.sonuc.mesaj="Hata oluştu";
      });
      }
      else{
        this.secKayit.duzTarih=tarih.getTime().toString();
        this.servis.KayitDuzenle(this.secKayit).subscribe(d=>{
          this.sonuc.islem=true;
          this.sonuc.mesaj="Kayıt Düzenlendi";
          this.KayitListele();
          this.Vazgec();
          },err=>{
            this.sonuc.islem=false;
            this.sonuc.mesaj="Hata oluştu";
          });
      }
    }
  
    Duzenle(kayit:Kayit){
      Object.assign(this.secKayit, kayit);
    }
  
    Sil(kayit:Kayit){
      this.servis.KayitSil(kayit.id).subscribe(d=>{
        this.sonuc.islem=true;
        this.sonuc.mesaj="Kayıt Silindi";
        this.KayitListele();
    this.Vazgec();
        },err=>{
          this.sonuc.islem=false;
          this.sonuc.mesaj="Hata oluştu";
        });  
    }
  
    Vazgec(){
      this.secKayit=new Kayit();
      this.secKayit.id=0;
    }


}
