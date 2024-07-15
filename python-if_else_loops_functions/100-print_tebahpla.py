#!/usr/bin/python3

for i in range(26):
    print(chr(abs(i - 26) + 96) if i % 2 == 0 else chr(abs(i - 26) + 64), end='')
