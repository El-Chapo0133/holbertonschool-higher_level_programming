#!/usr/bin/python3

for i in range(26):
    print("{0}".format(chr(i - 122) if i % 2 == 0 else chr(i - 90)), end='')
