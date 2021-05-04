import { TestBed } from '@angular/core/testing';

import { TranslateModule } from '@ngx-translate/core';
import { TranslateConfig } from './translateConfig.service';

fdescribe('TranslateService', () => {
  let service: TranslateConfig;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [TranslateModule.forRoot()]

    }).compileComponents();
  });

  it('should be created', () => {
    service = TestBed.inject(TranslateConfig);
    expect(service).toBeTruthy();
  });

  it('getDefaultLanguage should return language if exists', () => {
    const language = service.getDefaultLanguage();
    expect(language).toBeDefined();
  });
});
