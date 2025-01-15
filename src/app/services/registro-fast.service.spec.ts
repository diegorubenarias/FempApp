import { TestBed } from '@angular/core/testing';

import { RegistroFastService } from './registro-fast.service';

describe('RegistroFastService', () => {
  let service: RegistroFastService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RegistroFastService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
