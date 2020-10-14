import { Location } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { ServerModule } from '@angular/platform-server';
import { coreRoutes } from '@core/core-routing.module';
import { CoreComponent } from '@core/core.component';

import { CoreModule } from '@core/core.module';
import { LocalizeParser, LocalizeRouterModule, LocalizeRouterSettings } from '@gilsdav/ngx-translate-router';
import { LocalizeRouterHttpLoader } from '@gilsdav/ngx-translate-router-http-loader';
import { TranslateLoader, TranslateModule, TranslateService } from '@ngx-translate/core';
import { Observable, of } from 'rxjs';
// @ts-ignore
import * as contentEn from '../assets/locale/en.json';
// @ts-ignore
import * as contentFr from '../assets/locale/fr.json';

const TRANSLATIONS = {
  en: contentEn,
  fr: contentFr
};

export class TranslateUniversalLoader implements TranslateLoader {
  getTranslation(lang: string): Observable<any> { return of(TRANSLATIONS[lang]);}
}

export function localizeLoaderFactory(translate: TranslateService, location: Location, settings: LocalizeRouterSettings, http: HttpClient) {
  // TODO: fix the path
  return new LocalizeRouterHttpLoader(translate, location, settings, http, 'http://localhost:7000/assets/locales.json');
}


@NgModule({
  imports: [
    ServerModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useClass: TranslateUniversalLoader
      }
    }),
    CoreModule,
    LocalizeRouterModule.forRoot(coreRoutes, {
      parser: {
        provide: LocalizeParser,
        useFactory: localizeLoaderFactory,
        deps: [TranslateService, Location, LocalizeRouterSettings, HttpClient]
      }
    })
  ],
  bootstrap: [CoreComponent],
})
export class AppServerModule {
}
