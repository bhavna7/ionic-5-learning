import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.page.html',
  styleUrls: ['./user-details.page.scss'],
})

export class UserDetailsPage implements OnInit {
  public userDetails: any = {};
  public emailOptions: Array<any> = [];

  public isVisible: boolean = false;
  public isEdit: boolean = false;

  @Input() user: any;

  constructor(private modalController: ModalController) {}

  ngOnInit() {
    this.userDetails = {};
    this.isVisible = false;

    this.userDetails = this.user;
    if (this.userDetails && Object.keys(this.userDetails).length > 0) {
      this.userDetails.displayDate = new Date(this.userDetails.bDate).toDateString();
      this.isVisible = true;
    }

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

  public close() {
    this.modalController.dismiss();
  }

}
