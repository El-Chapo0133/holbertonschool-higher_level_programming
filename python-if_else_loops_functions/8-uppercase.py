#!/usr/bin/python3

def uppercase(c):
    for i in c:
        char = i
        if ord(i) > 96 and ord(i) < 123:
            char = char - 32 
        print("{0}".format(char))
print()
