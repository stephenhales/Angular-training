import { CarToolModule } from './car-tool.module';

describe('CarToolModule', () => {
  let carToolModule: CarToolModule;

  beforeEach(() => {
    carToolModule = new CarToolModule();
  });

  it('should create an instance', () => {
    expect(carToolModule).toBeTruthy();
  });
});
