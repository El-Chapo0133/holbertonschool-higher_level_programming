#!/usr/bin/python3
"""
This module is documented
"""


def add_integer(a, b=98):
    """
    This function is documented
    """
    if (not isinstance(a, (int, float))):
        raise TypeError("a must be an integer")
    elif (not isinstance(b, (int, float))):
        raise TypeError("b must be an integer")
    if (a == float("inf") or b == float("inf")):
        raise OverflowError("a nor b can be infinity")
    if (a != a or b != b):
        raise ValueError("a nor b can be NaN")
    return int(a) + int(b)
