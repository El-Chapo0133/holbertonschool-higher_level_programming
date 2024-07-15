#!/usr/bin/python3

for i in range(10):
    for j in range(abs(i - 9)):
        if (j + i + 1 == 89):
            print(str(i) + str(j + i + 1))
        else:
            print(str(i) + str(j + i + 1) + ", ", end='')
print()
