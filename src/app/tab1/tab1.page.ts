import { Component } from '@angular/core';
import { ToastController } from '@ionic/angular';

import * as users from '../users.json';
import { File } from '@ionic-native/file/ngx';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
  providers: [File]
})

export class Tab1Page {
  public emailOptions: Array<any> = [];
  public userObject: any = {};
  public ModuleName: string = 'Tab1Page';

  constructor(
    private toastController: ToastController,
    private file: File,
    private translateService: TranslateService
  ) {
  }

  // Called everytime the view is navigated, best for data loading
  ionViewWillEnter() {
    this.emailOptions = [
      {
        title: 'Once in week',
        answer: 'weekly-one'
      },
      {
        title: 'Once in month',
        answer: 'monthly-one'
      },
      {
        title: 'No thanks',
        answer: 'never'
      }
    ];
  }

  // To display the filled details
  public print() {
    if (this.validate()) {
      const usersList: any = (users as any).default;
      usersList.push(this.userObject);
      this.file.writeFile('src/app/', 'users.json', JSON.stringify(usersList), { replace: true });
      this.warningToast('');
      this.userObject = {};
    }
  }

  // To validate the object
  public validate(): boolean {
    if (!this.userObject.isChecked) {
      this.warningToast('isChecked')
      return false;

    } else if (!this.userObject.fName) {
      this.warningToast('fName')
      return false;

    } else if (!this.userObject.lName) {
      this.warningToast('lName')
      return false;

    } else if (!this.userObject.email) {
      this.warningToast('email')
      return false;

    } else if (!this.userObject.gender) {
      this.warningToast('gender')
      return false;

    } else if (!this.userObject.phone) {
      this.warningToast('phone')
      return false;

    } else if (!this.userObject.address) {
      this.warningToast('address')
      return false;

    } else if (!this.userObject.bDate) {
      this.warningToast('bDate')
      return false;

    } else if (!this.userObject.frequency) {
      this.warningToast('frequency')
      return false;

    } else {
      return true;
    }
  }

  // To show warning toast based on different req.
  public async warningToast(reqFrom) {
    let textMsg = '';

    switch (reqFrom) {
      case 'isChecked':
        textMsg = 'Please accept the terms and conditions.'
        break;

      case 'fName':
        textMsg = 'Please enter first name.'
        break;

      case 'lName':
        textMsg = 'Please enter last name.'
        break;

      case 'email':
        textMsg = 'Please enter email id.'
        break;

      case 'gender':
        textMsg = 'Please select gender.'
        break;

      case 'phone':
        textMsg = 'Please enter valid phone number.'
        break;

      case 'bDate':
        textMsg = 'Please enter your birth date.'
        break;

      case 'address':
        textMsg = 'Please enter address.'
        break;

      case 'frequency':
        textMsg = 'Please select the frequency for emails.'
        break;

      default: textMsg = 'User Registered Successfully';
    }

    let closeText: any = '';
    this.translateService.get('Common.close').subscribe((value) => {
      closeText = value;
    });

    const toast = await this.toastController.create({
      message: `${textMsg}`,
      position: 'middle',
      buttons: [
        {
          text: `${closeText}`,
          role: 'cancel',
        }
      ]
    });
    toast.present();
  }
}
