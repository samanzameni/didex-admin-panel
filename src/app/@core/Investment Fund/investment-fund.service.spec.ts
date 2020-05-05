import { TestBed } from '@angular/core/testing';

import { InvestmentFundService } from './investment-fund.service';

describe('InvestmentFundService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: InvestmentFundService = TestBed.get(InvestmentFundService);
    expect(service).toBeTruthy();
  });
});
