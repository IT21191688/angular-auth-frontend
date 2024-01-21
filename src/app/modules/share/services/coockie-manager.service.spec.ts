import { TestBed } from '@angular/core/testing';

import { CoockieManagerService } from './coockie-manager.service';

describe('CoockieManagerService', () => {
  let service: CoockieManagerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CoockieManagerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
