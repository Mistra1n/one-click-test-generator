# calculator_test.py
import pytest

def test_divide_positive_numbers():
    # Arrange
    a, b = 10, 2
    # Act & Assert
    assert divide(a, b) == 5

def test_divide_by_zero():
    with pytest.raises(ZeroDivisionError):
        divide(5, 0)  # Edge case