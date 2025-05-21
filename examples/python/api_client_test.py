# api_client_test.py
import pytest
from unittest.mock import Mock
from api_client import APIClient

@pytest.fixture
def mock_requests(monkeypatch):
    mock = Mock()
    monkeypatch.setattr("requests.get", mock)
    return mock

def test_get_user_success(mock_requests):
    # Arrange
    client = APIClient("https://api.example.com")
    mock_requests.return_value.json.return_value = {"id": 1, "name": "John"}
    mock_requests.return_value.raise_for_status.return_value = None
    
    # Act
    result = client.get_user(1)
    
    # Assert
    assert result == {"id": 1, "name": "John"}
    mock_requests.assert_called_with("https://api.example.com/users/1")
    
def test_get_user_performance(benchmark):
    client = APIClient("https://api.example.com")
    benchmark(client.get_user, 1)  # pytest-benchmark plugin