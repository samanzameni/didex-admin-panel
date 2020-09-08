import { TestBed } from '@angular/core/testing';

import { MarketingService } from './marketing.service';

describe('MarketingService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MarketingService = TestBed.get(MarketingService);
    expect(service).toBeTruthy();
  });
});
