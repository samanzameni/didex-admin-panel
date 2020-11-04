import { TestBed } from '@angular/core/testing';

import { SavesInvestmentService } from './saves-investment.service';

describe('SavesInvestmentService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SavesInvestmentService = TestBed.get(SavesInvestmentService);
    expect(service).toBeTruthy();
  });
});
