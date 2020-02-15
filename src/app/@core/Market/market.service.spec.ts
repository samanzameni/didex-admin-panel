import { TestBed } from '@angular/core/testing';

import { MarketService } from './market.service';

describe('MarketService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MarketService = TestBed.get(MarketService);
    expect(service).toBeTruthy();
  });
});
