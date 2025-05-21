// apiService.test.js
import { ApiService } from './apiService';
import { jest } from '@jest/globals';

describe('ApiService', () => {
  beforeEach(() => {
    global.fetch = jest.fn();
  });

  test('fetchPosts handles 404', async () => {
    fetch.mockResolvedValue({ ok: false, status: 404 });
    const service = new ApiService('https://api.example.com');
    await expect(service.fetchPosts()).rejects.toThrow('HTTP error! status: 404');
  });

  test('fetchPosts returns valid JSON', async () => {
    fetch.mockResolvedValue({
      ok: true,
      json: () => Promise.resolve([{ id: 1, title: 'Test' }])
    });
    const service = new ApiService('https://api.example.com');
    expect(await service.fetchPosts()).toEqual([{ id: 1, title: 'Test' }]);
  });
});