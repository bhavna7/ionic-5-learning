import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';
import { TranslateModule } from '@ngx-translate/core';
import { File } from '@ionic-native/file/ngx';
import { ToastController } from '@ionic/angular';

import { Tab1Page } from './tab1.page';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';

describe('Tab1Page', () => {
  let component: Tab1Page;
  let fixture: ComponentFixture<Tab1Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Tab1Page],
      imports: [
        IonicModule.forRoot(), 
        ExploreContainerComponentModule,
        TranslateModule.forRoot(),
        FormsModule // To be imported else we get error can't bind to ngModel as it's not known property
      ],
      providers: [
        File,
        ToastController
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(Tab1Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create tab1 component', () => {
    expect(component).toBeTruthy();
  });
});
