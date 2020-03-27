import { TestBed, async, inject } from '@angular/core/testing';

import { SuperUserGuard } from './super-user.guard';

describe('SuperUserGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SuperUserGuard]
    });
  });

  it('should ...', inject([SuperUserGuard], (guard: SuperUserGuard) => {
    expect(guard).toBeTruthy();
  }));
});
