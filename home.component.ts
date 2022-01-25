import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

ad:string;
yas:number;

  constructor() { }

  ngOnInit() {
this.ad="Ali";
this.yas=20;

  }


}

