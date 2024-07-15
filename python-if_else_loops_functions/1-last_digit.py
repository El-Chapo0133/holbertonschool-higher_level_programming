#!/usr/bin/python3
import random
number = random.randint(-10000, 10000)

digit = str(number)[-1]
if number < 0:
    digit = int(digit) - 10

print("Last digit of " + str(number) + " is " + digit + " and is ", end='')
if int(digit) > 5:
    print("greater than 5")
elif int(digit) == 0:
    print("0")
else:
    print("less than 6 and not 0")
