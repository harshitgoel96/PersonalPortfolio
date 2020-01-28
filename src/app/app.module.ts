import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ServicesProvidedComponent } from './services-provided/services-provided.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatIconModule,MatSidenavModule} from '@angular/material';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ServicesProvidedComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,MatIconModule,MatSidenavModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
