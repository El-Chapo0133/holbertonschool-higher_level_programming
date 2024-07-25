#!/usr/bin/python3
"""
This module is documented
"""


def print_square(size):
    """
    This function is documented
    """
    if (not isinstance(size, int)):
        raise TypeError("size must be an integer")
    if (size <= 0):
        raise ValueError("size must be >= 0")
    for i in range(size):
        print("#" * size)
