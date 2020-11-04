import { TestBed } from '@angular/core/testing';

import { SavesReportsTransactionsService } from './saves-reports-transactions.service';

describe('SavesReportsTransactionsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SavesReportsTransactionsService = TestBed.get(SavesReportsTransactionsService);
    expect(service).toBeTruthy();
  });
});
