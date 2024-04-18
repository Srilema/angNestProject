import { Test, TestingModule } from '@nestjs/testing';
import { LoueursService } from './loueurs.service';

describe('LoueursService', () => {
  let service: LoueursService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [LoueursService],
    }).compile();

    service = module.get<LoueursService>(LoueursService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
