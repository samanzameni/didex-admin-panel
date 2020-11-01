import { TestBed } from '@angular/core/testing';

import { SavesKYCService } from './saves-kyc.service';

describe('SavesKYCService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SavesKYCService = TestBed.get(SavesKYCService);
    expect(service).toBeTruthy();
  });
});
