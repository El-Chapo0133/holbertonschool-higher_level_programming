#!/usr/bin/python3
"""
This module is documented
"""

def say_my_name(first="", last=""):
    """
    This function is documented
    """
    if (not isinstance(first, str)):
        print("first_name must be a string")
    elif (not isinstance(last, str)):
        print("last_name must be a string")
    else:
        print("My name is " + first + " " + last)
        
