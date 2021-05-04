import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { Storage } from '@ionic/storage';

import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})

export class AppComponent {
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private translateService: TranslateService,
    private storgae: Storage
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.storgae.ready().then(() => {
        this.storgae.get('myLang').then((lang: any) => {
          const language = lang ? lang : 'en';
          this.translateService.use(language);
        });

        this.storgae.get('mode').then((value) => {
          const mode = value === 'dark' ? 'dark' : 'light';
          if (mode === 'dark') {
            document.body.classList.add('dark');

          } else {
            document.body.classList.remove('dark');
          }
        });
      });

      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }
}
