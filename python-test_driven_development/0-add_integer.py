#!/usr/bin/python3
"""
This module is documented
"""

def add_integer(a, b):
    """
    This function is documented
    """
    if (not isinstance(a, int)):
        raise TypeError("a must be an integer")
    elif (not isinstance(b, int)):
        raise TypeError("b must be an integer")

    return a + b
