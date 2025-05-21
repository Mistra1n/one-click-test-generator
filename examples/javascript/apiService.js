// apiService.js
export class ApiService {
    constructor(baseUrl) {
      this.baseUrl = baseUrl;
    }
    
    async fetchPosts() {
      const response = await fetch(`${this.baseUrl}/posts`);
      if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
      return await response.json();
    }
  }