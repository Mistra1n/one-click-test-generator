# api_client.py
import requests

class APIClient:
    def __init__(self, base_url):
        self.base_url = base_url
        
    def get_user(self, user_id):
        response = requests.get(f"{self.base_url}/users/{user_id}")
        response.raise_for_status()
        return response.json()