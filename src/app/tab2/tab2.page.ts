import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';

import { UserDetailsPage } from '../user-details/user-details.page';
import * as users from '../users.json';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})

export class Tab2Page {
  public usersList: Array<any> = [];
  public items: Array<any> = [];

  public isDisabled: boolean = false;
  public skipCount: any = 1;

  constructor(
    private modalController: ModalController
  ) {}

  // Called everytime the view is navigated, best for data loading
  ionViewWillEnter() {
    const retrivedItem = (users as any).default;
    this.items = [];
    
    for (let index = 0; index < 160; index++) {
      this.items.push(retrivedItem[0]);
    }
    this.items.unshift(retrivedItem);
    this.items = [].concat.apply([], this.items);
    this.addUsers();
  }

  public loadData(event) {
    setTimeout(() => {
      this.addUsers();
      event.target.complete();

      // App logic to determine if all data is loaded
      // and disable the infinite scroll
      if (this.usersList.length == this.items.length) {
        event.target.disabled = true;
        this.isDisabled = true;
      }
    }, 500);
  }

  public addUsers() {
    if (this.items.length < 20) {
      this.usersList = this.items;
    } else {
      let limit = this.skipCount *20;
      this.usersList = [];

      if (limit >= this.items.length) {
        for (let index = 0; index < this.items.length; index++) {
          this.usersList.push(this.items[index]);
        }  

      } else {
        for (let index = 0; index < limit; index++) {
          this.usersList.push(this.items[index]);
        }
      }
      this.skipCount++;
    }
  }

  public openDetails(userRecieved) {
    this.presentModal(userRecieved)
  }

  async presentModal(user) {
    const modal = await this.modalController.create({
      component: UserDetailsPage,
      componentProps: { user },
      swipeToClose: true, // Only in IOS
      presentingElement: await this.modalController.getTop() // Get the top-most ion-modal
    });
    return await modal.present();
  }

}
