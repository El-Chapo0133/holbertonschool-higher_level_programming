#!/usr/bin/python3


def uppercase(c):
    g = ""
    for ch in c:
        if ord(ch) >= 65 and ord(ch) <= 90:
            x = ord(ch) +32
            y = chr(x)
            g = g + y
    print("{0}".format(g))
