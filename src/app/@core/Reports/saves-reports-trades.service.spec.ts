import { TestBed } from '@angular/core/testing';

import { SavesReportsTradesService } from './saves-reports-trades.service';

describe('SavesReportsTradesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SavesReportsTradesService = TestBed.get(SavesReportsTradesService);
    expect(service).toBeTruthy();
  });
});
