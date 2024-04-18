import { Test, TestingModule } from '@nestjs/testing';
import { LocatagsController } from './locatags.controller';

describe('LocatagsController', () => {
  let controller: LocatagsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [LocatagsController],
    }).compile();

    controller = module.get<LocatagsController>(LocatagsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
