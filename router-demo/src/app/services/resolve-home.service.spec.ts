import { TestBed } from '@angular/core/testing';

import { ResolveHomeService } from './resolve-home.service';

describe('ResolveHomeService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ResolveHomeService = TestBed.get(ResolveHomeService);
    expect(service).toBeTruthy();
  });
});
