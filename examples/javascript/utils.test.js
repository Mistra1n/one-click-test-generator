import { capitalize, chunkArray } from './utils.js';

describe('String Utilities', () => {
  test('capitalize should handle empty string', () => {
    expect(capitalize('')).toBe('');
  });

  test('capitalize should convert mixed case', () => {
    expect(capitalize('hElLo')).toBe('Hello');
  });
});

describe('Array Utilities', () => {
  test('chunkArray divides array correctly', () => {
    expect(chunkArray([1, 2, 3, 4], 2)).toEqual([[1, 2], [3, 4]]);
  });

  test('chunkArray throws error for non-array input', () => {
    expect(() => chunkArray('not array', 2)).toThrow('Input must be an array');
  });
});