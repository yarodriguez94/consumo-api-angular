import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { PlayerComponent } from './components/player/player.component';


//SERVICIOS 
import {DataServices} from './app.services';
//RUTAS 

import {  ROUTES } from './app.routes';
import { HttpClientModule } from '@angular/common/http';





@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    AboutComponent,
    PlayerComponent
  ],
  imports: [
    BrowserModule,
    ROUTES,
    HttpClientModule
  ],
  providers: [
    DataServices
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
