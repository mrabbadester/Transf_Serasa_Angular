import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MenuComponent } from './navegacao/menu/menu.component';
import { HomeComponent } from './navegacao/home/home.component';
import { FooterComponent } from './navegacao/footer/footer.component';
import { SobreComponent } from './empresa/sobre/sobre.component';
import { ContatoComponent } from './empresa/contato/contato.component';

import { Router, RouterModule } from '@angular/router';
import { APP_BASE_HREF } from '@angular/common';

import { rotasConfig } from './app.routes';
import { LoginComponent } from './navegacao/login/login.component';
import { TesteComponent } from './navegacao/teste/teste.component';
import { FormsModule } from '@angular/forms';
import { ObservadoraComponent } from './navegacao/observadora/observadora.component';


@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    HomeComponent,
    FooterComponent,
    SobreComponent,
    ContatoComponent,
    LoginComponent,
    TesteComponent,
    ObservadoraComponent,

  ],
  imports: [
    BrowserModule,
    [RouterModule.forRoot(rotasConfig)],
    FormsModule
  ],

  providers: [
   
   {provide: APP_BASE_HREF, useValue: '/'}
   ],
  bootstrap: [AppComponent]
})
export class AppModule { }
