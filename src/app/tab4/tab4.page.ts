import { Component, OnInit } from '@angular/core';
import { ActionSheetController } from '@ionic/angular';

import { TranslateService } from '@ngx-translate/core';
import { Photo, PhotoService } from '../services/photo.service';

@Component({
  selector: 'app-tab4',
  templateUrl: './tab4.page.html',
  styleUrls: ['./tab4.page.scss'],
})
export class Tab4Page implements OnInit{

  constructor(
    public photoService: PhotoService,
    public actionSheetController: ActionSheetController,
    private translateService: TranslateService
  ) { }

  async ngOnInit() {
    await this.photoService.loadSaved();
  }

  public async showActionSheet(photo: Photo, position: number) {
    let deleteText: any = '';
    this.translateService.get('Common.delete').subscribe((value) => {
      deleteText = value;
    });

    let cancelText: any = '';
    this.translateService.get('Common.cancel').subscribe((value) => {
      cancelText = value;
    });

    const actionSheet = await this.actionSheetController.create({
      header: 'Photos',
      buttons: [{
        text: deleteText,
        role: 'destructive',
        icon: 'trash',
        handler: () => {
          this.photoService.deletePicture(photo, position);
        }
      }, {
        text: cancelText,
        icon: 'close',
        role: 'cancel',
        handler: () => {
          // Nothing to do, action sheet is automatically closed
        }
      }]
    });
    await actionSheet.present();
  }

}
