import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { TranslateModule } from '@ngx-translate/core'

import { IonicModule } from '@ionic/angular';

import { UserDetailsPage } from './user-details.page';

describe('UserDetailsPage', () => {
  let component: UserDetailsPage;
  let fixture: ComponentFixture<UserDetailsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserDetailsPage ],
      imports: [
        IonicModule,
        TranslateModule.forRoot(),
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(UserDetailsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create user details component', () => {
    expect(component).toBeTruthy();
  });

  it('should contain all the information related to user', () => {
    setTimeout(() => {
      expect(component.userDetails).toBeDefined();
    }, 1000);
  });

  it('should return only boolean values for showing and hiding details', () => {
    expect(component.isVisible).toBeInstanceOf(Boolean);
  });

  it('should return the avaliable frequencies as array for email', () => {
    expect(component.emailOptions.length).toBeGreaterThan(0);
  });
});
