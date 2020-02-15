import { TestBed } from '@angular/core/testing';

import { LoginRestfulAPIService } from './login-restful-api.service';

describe('LoginRestfulAPIService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: LoginRestfulAPIService = TestBed.get(LoginRestfulAPIService);
    expect(service).toBeTruthy();
  });
});
