import { TestBed } from '@angular/core/testing';

import { KYCService } from './kyc.service';

describe('KYCService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: KYCService = TestBed.get(KYCService);
    expect(service).toBeTruthy();
  });
});
