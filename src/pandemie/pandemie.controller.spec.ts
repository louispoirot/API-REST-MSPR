import { Test, TestingModule } from '@nestjs/testing';
import { PandemieController } from './pandemie.controller';

describe('PandemieController', () => {
  let controller: PandemieController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PandemieController],
    }).compile();

    controller = module.get<PandemieController>(PandemieController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
