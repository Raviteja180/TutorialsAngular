import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './main-component/navbar/navbar.component';
import { MiddleComponent } from './main-component/middle/middle.component';
import { SectionbarComponent } from './main-component/sectionbar/sectionbar.component';
import { ComponentforCardsComponent } from './main-component/componentfor-cards/componentfor-cards.component';
import { FooterComponent } from './main-component/footer/footer.component';
import { RoutingDemoComponent } from './main-component/routing-demo/routing-demo.component';
import { RoutingDemo2Component } from './main-component/routing-demo2/routing-demo2.component';
import { MainComponentComponent } from './main-component/main-component.component';
import { RegisterComponent } from './register/register.component';
import { FormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { CardComponent } from './card/card.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    MiddleComponent,
    SectionbarComponent,
    ComponentforCardsComponent,
    FooterComponent,
    RoutingDemoComponent,
    RoutingDemo2Component,
    MainComponentComponent,
    RegisterComponent,
    LoginComponent,
    CardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
