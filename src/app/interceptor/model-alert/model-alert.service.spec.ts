import { TestBed } from '@angular/core/testing';

import { ModelAlertService } from './model-alert.service';

describe('ModelAlertService', () => {
  let service: ModelAlertService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ModelAlertService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
