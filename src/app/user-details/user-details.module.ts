import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UserDetailsPageRoutingModule } from './user-details-routing.module';
import { UserDetailsPage } from './user-details.page';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild([{ path: '', component: UserDetailsPage }]),
    UserDetailsPageRoutingModule,
    TranslateModule
  ],
  declarations: [UserDetailsPage]
})
export class UserDetailsPageModule {}
