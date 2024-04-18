import { Test, TestingModule } from '@nestjs/testing';
import { LoueursController } from './loueurs.controller';

describe('LoueursController', () => {
  let controller: LoueursController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [LoueursController],
    }).compile();

    controller = module.get<LoueursController>(LoueursController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
