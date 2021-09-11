import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ComponentforCardsComponent } from './main-component/componentfor-cards/componentfor-cards.component';
import { FooterComponent } from './main-component/footer/footer.component';
import { MainComponentComponent } from './main-component/main-component.component';
import { MiddleComponent } from './main-component/middle/middle.component';
import { RoutingDemoComponent } from './main-component/routing-demo/routing-demo.component';
import { RoutingDemo2Component } from './main-component/routing-demo2/routing-demo2.component';
import { SectionbarComponent } from './main-component/sectionbar/sectionbar.component';

const routes: Routes = [
  // { path : '/', component : RoutingDemoComponent},
  { path : 'jobs', component : RoutingDemoComponent,},
  { path: 'q&a', component : RoutingDemo2Component},
  { path: '', component : MainComponentComponent},
  // { path: '', component : FooterComponent},
  // { path: '', component : MiddleComponent},
  // { path: '', component : ComponentforCardsComponent},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
