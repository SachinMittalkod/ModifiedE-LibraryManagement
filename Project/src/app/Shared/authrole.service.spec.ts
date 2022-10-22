import { TestBed } from '@angular/core/testing';

import { AuthroleService } from './authrole.service';

describe('AuthroleService', () => {
  let service: AuthroleService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AuthroleService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
