import { TestBed } from '@angular/core/testing';

import { DeportistService } from './deportist.service';

describe('DeportistService', () => {
  let service: DeportistService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DeportistService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
