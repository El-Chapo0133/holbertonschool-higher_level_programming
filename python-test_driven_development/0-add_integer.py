#!/usr/bin/python3

def add_integer(a, b):
    if (not isinstance(a, int)):
        raise TypeError("a must be an integer")
    elif (not isinstance(b, int)):
        raise TypeError("b must be an integer")

    return a + b
