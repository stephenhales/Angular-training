import { TestBed } from '@angular/core/testing';

import { AuthAboutService } from './auth-about.service';

describe('AuthAboutService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AuthAboutService = TestBed.get(AuthAboutService);
    expect(service).toBeTruthy();
  });
});
