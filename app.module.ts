import { DataService } from './services/data.service';
import { environment } from './../environments/environment';
import { HomeComponent } from './components/home/home.component';

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';

import { Test1Component } from './components/test1/test1.component';
import { Test2Component } from './components/test2/test2.component';
import { Test3Component } from './components/test3/test3.component';
import { Test4Component } from './components/test4/test4.component';
import { Test5Component } from './components/test5/test5.component';
import { Test6Component } from './components/test6/test6.component';
import { SoruComponent } from './components/soru/soru.component';
import { UyeadminComponent } from './components/uyeadmin/uyeadmin.component';

import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database';

import { FormsModule } from '@angular/forms';






@NgModule({
  declarations: [
    AppComponent,
    Test1Component,
    Test2Component,
    Test3Component,
    Test4Component,
    Test5Component,
    Test6Component,
    SoruComponent,
    HomeComponent,
    UyeadminComponent
    // KayitlarComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment. firebaseConfig),
    AngularFireDatabaseModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
