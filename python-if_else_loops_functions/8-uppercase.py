#!/usr/bin/python3


def uppercase(c):
    g = ""
    for ch in c:
        if ord(ch) >= 97 and ord(ch) <= 122:
            g = g + chr(ord(ch) - 32)
        else:
            g = g + ch
    print("{0}".format(g))
