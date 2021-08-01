import { SubstringPipe } from './substring.pipe';

describe('SubstringPipe', () => {
  let pipe: SubstringPipe;

  beforeEach(() => {
    pipe = new SubstringPipe();
  });

  it('create an instance', () => {
    expect(pipe).toBeTruthy();
  });

  it('should return substring', () => {
    const maxLength = [...new Array(100)].fill('A').join('');
    expect(pipe.transform(maxLength).length).toBe(53);
  });
});
