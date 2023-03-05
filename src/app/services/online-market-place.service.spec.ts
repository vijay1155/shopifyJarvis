import { TestBed } from '@angular/core/testing';

import { OnlineMarketPlaceService } from './online-market-place.service';

describe('OnlineMarketPlaceService', () => {
  let service: OnlineMarketPlaceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OnlineMarketPlaceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
