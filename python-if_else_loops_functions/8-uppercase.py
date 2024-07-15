#!/usr/bin/python3


def uppercase(c):
    for i in range(len(c)):
    char = i
    if ord(i) > 96 and ord(i) < 123:
        char = chr(ord(char) - 32) 
    if i + 1 == len(c):
        print("{0}".format(char))
    else:
        print("{0}".format(char), end='')

"""
def uppercase(c):
    for i in c:
        char = i
        if ord(i) > 96 and ord(i) < 123:
            char = chr(ord(char) - 32) 
        print("{0}".format(char), end='')
print()
"""
