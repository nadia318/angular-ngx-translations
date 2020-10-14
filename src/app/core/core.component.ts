import { Component } from '@angular/core';
import { environment } from '../../environments/environment';
import { LocalizeRouterService } from '@gilsdav/ngx-translate-router';

@Component({
  selector: 'app-core',
  templateUrl: './core.component.html',
  styleUrls: ['./core.component.scss']
})
export class CoreComponent {
  title = 'angular-translations';
  env = environment.production;

  constructor(private localize: LocalizeRouterService) { }

  public switchLang() {
    this.localize.changeLanguage(this.localize.parser.currentLang === 'fr' ? 'en' : 'fr');
    console.log('change lang', this.localize.parser.currentLang);
  }
}
