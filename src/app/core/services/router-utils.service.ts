import { Injectable } from '@angular/core';
import { UrlMatchResult, UrlSegment } from '@angular/router';
import { LangTypes } from '@shared/constants/langs.const';

@Injectable({
  providedIn: 'root'
})
export class RouterUtilsService {

  static translationMatcher(url: UrlSegment[]): UrlMatchResult {
    const lang = url[0];
    if (lang && LangTypes.includes(lang.path)) {
      return {
        consumed: [lang],
      };
    }

    return {
      consumed: []
    };
  }

  static searchMatcher(url: UrlSegment[]): UrlMatchResult {
    return {
      consumed: url,
    };
  }
}
