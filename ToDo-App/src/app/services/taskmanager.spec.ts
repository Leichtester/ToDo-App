import { TestBed } from '@angular/core/testing';

import { Taskmanager } from './taskmanager';

describe('Taskmanager', () => {
  let service: Taskmanager;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Taskmanager);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
