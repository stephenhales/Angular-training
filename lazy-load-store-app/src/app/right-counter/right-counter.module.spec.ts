import { RightCounterModule } from './right-counter.module';

describe('RightCounterModule', () => {
  let rightCounterModule: RightCounterModule;

  beforeEach(() => {
    rightCounterModule = new RightCounterModule();
  });

  it('should create an instance', () => {
    expect(rightCounterModule).toBeTruthy();
  });
});
