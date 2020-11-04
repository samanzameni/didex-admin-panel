import { TestBed } from '@angular/core/testing';

import { SavesReportsService } from './saves-reports.service';

describe('SavesReportsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SavesReportsService = TestBed.get(SavesReportsService);
    expect(service).toBeTruthy();
  });
});
