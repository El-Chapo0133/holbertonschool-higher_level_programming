#!/usr/bin/python3

for i in range(10):
    for j in range(abs(i - 9)):
        if (str(i) + str(j + i + 1) == "89"):
            print("{0}".format(str(i) + str(j + i + 1)))
        else:
            print("{0}, ".format(str(i) + str(j + i + 1)), end='')
print()
