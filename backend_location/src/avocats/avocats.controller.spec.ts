import { Test, TestingModule } from '@nestjs/testing';
import { AvocatsController } from './avocats.controller';

describe('AvocatsController', () => {
  let controller: AvocatsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AvocatsController],
    }).compile();

    controller = module.get<AvocatsController>(AvocatsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
