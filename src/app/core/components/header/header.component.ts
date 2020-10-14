import { Component, OnInit } from '@angular/core';
import { LocalizeRouterService } from '@gilsdav/ngx-translate-router';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(public translate: TranslateService, private localize: LocalizeRouterService) { }

  ngOnInit(): void {
  }

  changeLang(lang: string): void {
    console.log(2, lang, this.translate.currentLang);
    this.translate.use(lang);
    this.localize.changeLanguage(lang)
  }

  test() {
    return this.translate.currentLang;
  }
}
