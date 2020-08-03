import { isPlatformBrowser } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { APP_ID, Inject, NgModule, PLATFORM_ID } from '@angular/core';


import { CoreComponent } from './core/core.component';
import { CoreModule } from './core/core.module';

@NgModule({
  imports: [
    CoreModule,
  ],
  bootstrap: [CoreComponent]
})
export class AppBrowserModule {
  constructor(
    @Inject(PLATFORM_ID) private platformId: object,
    @Inject(APP_ID) private appId: string) {
    const platform = isPlatformBrowser(platformId) ?
      'in the browser' : 'on the server';
    console.log(`Running ${platform} with appId=${appId}`);
  }
}
