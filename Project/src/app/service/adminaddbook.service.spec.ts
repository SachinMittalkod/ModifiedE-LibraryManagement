import { TestBed } from '@angular/core/testing';

import { AdminaddbookService } from './adminaddbook.service';

fdescribe('AdminaddbookService', () => {
  let service: AdminaddbookService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AdminaddbookService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
