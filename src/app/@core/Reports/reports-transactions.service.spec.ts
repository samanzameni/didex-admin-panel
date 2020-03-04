import { TestBed } from '@angular/core/testing';

import { ReportsTransactionsService } from './reports-transactions.service';

describe('ReportsTransactionsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ReportsTransactionsService = TestBed.get(ReportsTransactionsService);
    expect(service).toBeTruthy();
  });
});
