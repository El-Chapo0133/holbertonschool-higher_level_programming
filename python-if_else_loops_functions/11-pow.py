#!/usr/bin/python3

def pow(a, b):
    result = a
    for i in range(abs(b) - 1):
        result = result * a
    if b < 0:
        return 1 / result
    return result
