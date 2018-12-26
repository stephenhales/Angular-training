import { LeftCounterModule } from './left-counter.module';

describe('LeftCounterModule', () => {
  let leftCounterModule: LeftCounterModule;

  beforeEach(() => {
    leftCounterModule = new LeftCounterModule();
  });

  it('should create an instance', () => {
    expect(leftCounterModule).toBeTruthy();
  });
});
