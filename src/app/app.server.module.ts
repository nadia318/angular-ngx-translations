import { NgModule } from '@angular/core';
import { ServerModule } from '@angular/platform-server';

import { AppBrowserModule } from './app.browser.module';
import { CoreComponent } from './core/core.component';

@NgModule({
  imports: [
    AppBrowserModule,
    ServerModule,
  ],
  bootstrap: [CoreComponent],
})
export class AppServerModule {
}
