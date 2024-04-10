import { TestBed } from '@angular/core/testing';

import { CeritificateService } from './certificate.service';

describe('CeritificateService', () => {
  let service: CeritificateService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CeritificateService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
