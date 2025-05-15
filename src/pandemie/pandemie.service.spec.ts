import { Test, TestingModule } from '@nestjs/testing';
import { PandemieService } from './pandemie.service';

describe('PandemieService', () => {
  let service: PandemieService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PandemieService],
    }).compile();

    service = module.get<PandemieService>(PandemieService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
