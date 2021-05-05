import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HomeComponent } from './home/home.component';

import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';


import { RegistrationComponent } from './registration/registration.component';
import { LobComponent } from './lob/lob.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    
    PagenotfoundComponent,
    
    RegistrationComponent,
         LobComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
