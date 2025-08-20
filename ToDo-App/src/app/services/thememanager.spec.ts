import { TestBed } from '@angular/core/testing';

import { Thememanager } from './thememanager';

describe('Thememanager', () => {
  let service: Thememanager;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Thememanager);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
