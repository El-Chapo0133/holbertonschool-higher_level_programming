#!/usr/bin/python3
"""
This module is documented
"""


def print_square(size):
    if (not isinstance(size, int)):
        raise TypeError("size must be an integer")
    if (size <= 0):
        raose ValueError("size must be >= 0")
    for i in range(size):
        print("#" * size)
