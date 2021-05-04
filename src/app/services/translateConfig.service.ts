import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Injectable({
  providedIn: 'root'
})

export class TranslateConfig {

  constructor(
    private translateService: TranslateService
  ) { 
  }

  public getDefaultLanguage(){
    const language = this.translateService.getBrowserLang();
    this.translateService.setDefaultLang(language);
    return language;
  }

  public setLanguage(setLang) {
    this.translateService.use(setLang);
  }
}
