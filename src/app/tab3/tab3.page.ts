import { Component } from '@angular/core';
import { Storage } from '@ionic/storage';

import { TranslateConfig } from '../services/translateConfig.service';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})

export class Tab3Page {
  public isDark: boolean = false;

  constructor(
    private translateService: TranslateConfig,
    private storage: Storage
  ) {
    this.storage.ready().then(() => {
      this.storage.get('mode').then((value) => {
        this.isDark = value === 'dark' ? true : false; 
      });
    });
  }

  public switchMode(eventRecieved) {
    this.storage.ready().then(() => {
      if (eventRecieved.detail.checked === true) {
        this.storage.set('mode', 'dark');
        document.body.classList.add("dark");
      } else {
        this.storage.set('mode', 'light');
        document.body.classList.remove("dark");
      }
    });
  }

  public switchLanguage(eventRecieved) {
    this.storage.ready().then(() => {
      this.storage.set('myLang', eventRecieved.detail.value);
      this.translateService.setLanguage(eventRecieved.detail.value);
    });
  }

}
