import { TestBed, inject } from '@angular/core/testing';

import { RavenService } from './raven.service';

describe('RavenService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RavenService]
    });
  });

  it('should be created', inject([RavenService], (service: RavenService) => {
    expect(service).toBeTruthy();
  }));
});
