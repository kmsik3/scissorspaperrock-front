import { TestBed } from '@angular/core/testing';

import { GameRecordService } from './game-record.service';

describe('GameRecordService', () => {
  let service: GameRecordService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GameRecordService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
