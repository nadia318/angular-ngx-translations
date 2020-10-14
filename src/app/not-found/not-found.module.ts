import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LocalizeRouterModule } from '@gilsdav/ngx-translate-router';
import { NotFoundComponent } from './not-found.component';


const router: Routes = [{
  path: '',
  component: NotFoundComponent
}];

@NgModule({
  declarations: [NotFoundComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(router),
    LocalizeRouterModule.forChild(router),
  ]
})
export class NotFoundModule {
}
