import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { LocalizeRouterModule } from '@gilsdav/ngx-translate-router';
import { HomeComponent } from './home.component';


const routes = [{
  path: '',
  component: HomeComponent
}]
@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    LocalizeRouterModule.forChild(routes),
  ]
})
export class HomeModule { }
