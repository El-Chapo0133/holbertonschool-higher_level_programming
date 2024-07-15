#!/usr/bin/python3
"""This is the best square class possible woaw"""


class Square():
    """This is the best square class possible woaw"""
    __size = 0

    def __init__(self, new_size=0):
        if type(new_size) is not int:
            raise TypeError("size must be an integer")
        if new_size < 0:
            raise ValueError("size must be >= 0")
        self.__size = new_size
