#!/usr/bin/python3
"""
This module is documented
"""

def say_my_name(first="", last=""):
    """
    This function is documented
    """
    if (not isinstance(first, string)):
        print("first_name must be string")
    if (not isinstance(last, string)):
        print("last_name must be string")
    print("My name is " + first + " " + last)
        
