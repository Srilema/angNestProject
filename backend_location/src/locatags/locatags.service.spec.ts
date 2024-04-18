import { Test, TestingModule } from '@nestjs/testing';
import { LocatagsService } from './locatags.service';

describe('LocatagsService', () => {
  let service: LocatagsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [LocatagsService],
    }).compile();

    service = module.get<LocatagsService>(LocatagsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
