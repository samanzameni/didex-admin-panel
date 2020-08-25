import { TestBed, async, inject } from '@angular/core/testing';

import { TwoFactorGuard } from './two-factor.guard';

describe('TwoFactorGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TwoFactorGuard]
    });
  });

  it('should ...', inject([TwoFactorGuard], (guard: TwoFactorGuard) => {
    expect(guard).toBeTruthy();
  }));
});
