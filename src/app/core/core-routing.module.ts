import { Location } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LocalizeParser, LocalizeRouterModule, LocalizeRouterSettings } from '@gilsdav/ngx-translate-router';
import { LocalizeRouterHttpLoader } from '@gilsdav/ngx-translate-router-http-loader';
import { TranslateService } from '@ngx-translate/core';

export const coreRoutes: Routes = [
  {
    path: 'about',
    loadChildren: () => import('../about/about.module').then(m => m.AboutModule)
  },
  {
    path: '',
    loadChildren: () => import('../home/home.module').then(m => m.HomeModule)
  },
  {
    path: '**',
    loadChildren: () => import('../not-found/not-found.module').then(m => m.NotFoundModule),
  }
];


// tslint:disable-next-line:max-line-length
export function HttpLoaderFactory(translate: TranslateService, location: Location, settings: LocalizeRouterSettings, http: HttpClient): LocalizeRouterHttpLoader {
  return new LocalizeRouterHttpLoader(translate, location, { ...settings }, http);
}

@NgModule({
  imports: [
    RouterModule.forRoot(coreRoutes, {
      initialNavigation: 'disabled',
    }),
    LocalizeRouterModule.forRoot(coreRoutes, {
      parser: {
        provide: LocalizeParser,
        useFactory: HttpLoaderFactory,
        deps: [TranslateService, Location, LocalizeRouterSettings, HttpClient]
      },
      initialNavigation: true
    })
  ],
  exports: [RouterModule, LocalizeRouterModule]
})
export class CoreRoutingModule {
}
