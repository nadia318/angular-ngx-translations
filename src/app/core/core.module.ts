import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { CoreComponent } from './core.component';
import { coreRoutes } from './core.routing';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';


@NgModule({
  imports: [
    CommonModule,
    BrowserModule.withServerTransition({ appId: 'test-app' }),
    RouterModule.forRoot(coreRoutes, {
      initialNavigation: 'enabled'
    }),
    HttpClientModule,
    // The HttpClientInMemoryWebApiModule module intercepts HTTP requests
    // and returns simulated server responses.
    // Remove it when a real server is ready to receive requests.
    // HttpClientInMemoryWebApiModule.forRoot(
    //   InMemoryDataService, { dataEncapsulation: false }
    // )
  ],
  declarations: [CoreComponent],
  bootstrap: [ CoreComponent ]
})
export class CoreModule { }
