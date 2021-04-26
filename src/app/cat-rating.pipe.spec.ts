import { CatRatingPipe } from './cat-rating.pipe';

describe('CarRatingPipe', () => {
  it('create an instance', () => {
    const pipe = new CatRatingPipe();
    expect(pipe).toBeTruthy();
  });

  it('returns "N/A" string in case value is undefined', () => {
    const pipe = new CatRatingPipe();
    expect(pipe.transform(undefined)).toBe('N/A');
  });

  it('returns proper string in case value is sent', () => {
    const pipe = new CatRatingPipe();
    expect(pipe.transform(3)).toBe('<i class="fas fa-cat"></i> <i class="fas fa-cat"></i> <i class="fas fa-cat"></i> ');
  });
});
