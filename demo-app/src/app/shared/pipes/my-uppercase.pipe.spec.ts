import { MyUppercasePipe } from './my-uppercase.pipe';

describe('MyUppercasePipe', () => {

  let pipe: MyUppercasePipe;

  beforeEach(() => {
    pipe = new MyUppercasePipe();
  });

  it('create an instance', () => {
    expect(pipe).toBeTruthy();
  });

  it('should make text uppercase', () => {
    const output = pipe.transform('abc');
    expect(output).toEqual('ABC');
  });

});
