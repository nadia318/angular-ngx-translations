import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { LocalizeRouterModule } from '@gilsdav/ngx-translate-router';
import { HomeComponent } from '../home/home.component';
import { AboutComponent } from './about.component';


const routes = [{
  path: '',
  component: AboutComponent
}]

@NgModule({
  declarations: [AboutComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    LocalizeRouterModule.forChild(routes),
  ]
})
export class AboutModule { }
