import { Test, TestingModule } from '@nestjs/testing';
import { AvocatsService } from './avocats.service';

describe('AvocatsService', () => {
  let service: AvocatsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AvocatsService],
    }).compile();

    service = module.get<AvocatsService>(AvocatsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
