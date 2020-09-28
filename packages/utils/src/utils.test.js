import { pick } from './utils';

describe('pick', () => {
  const testObject = { a: 1, b: 2, c: 3 };

  it('should return an object with the whitlisted given properties of the given object', () => {
    expect(pick(testObject, 'a', 'b')).toEqual({ a: 1, b: 2 });
  });

  it('should not add undefined properties to the result', () => {
    expect(pick(testObject, 'z')).toEqual({});
  });
});
