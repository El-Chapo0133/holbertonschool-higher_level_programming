#!/usr/bin/python3


def uppercase(c):
    g = ""
    for ch in c:
        if ord(ch) >= 65 and ord(ch) <= 90:
            g = g + chr(ord(ch) - 32)
        else:
            g = g + ch
    print("{0}".format(g))
