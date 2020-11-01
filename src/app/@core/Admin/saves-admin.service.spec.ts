import { TestBed } from '@angular/core/testing';

import { SavesAdminService } from './saves-admin.service';

describe('SavesAdminService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SavesAdminService = TestBed.get(SavesAdminService);
    expect(service).toBeTruthy();
  });
});
