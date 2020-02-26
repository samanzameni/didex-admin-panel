import { TestBed } from '@angular/core/testing';

import { ReportsTradesService } from './reports-trades.service';

describe('ReportsTradesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ReportsTradesService = TestBed.get(ReportsTradesService);
    expect(service).toBeTruthy();
  });
});
