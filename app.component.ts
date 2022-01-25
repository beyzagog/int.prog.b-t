import { Component } from '@angular/core';
import { Sorular } from 'src/app/sorular';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'sorucevap';
  message = "";

  constructor() { }

  sorular =new Sorular();

  addItem(value:string){
    if (value!="") {
      this.sorular.items.push({description:value,action:false})
      alert("İşlem tamamlandı.")
    }
    else{
      alert("Bilgi giriniz..")
    }
  
  }
  
  
  getItems(){
  return this.sorular.items;
  
  }
  
  ngOnInit() {
  
  }
  
  
  
  }



