import { MyAppendPipe } from './my-append.pipe';

xdescribe('MyAppendPipe', () => {
  it('create an instance', () => {
    const pipe = new MyAppendPipe();
    expect(pipe).toBeTruthy();
  });
});
