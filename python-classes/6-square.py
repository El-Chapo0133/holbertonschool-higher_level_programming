#!/usr/bin/python3
"""This is the best square class possible woaw"""


class Square():
    """This is the best square class possible woaw"""

    def __init__(self, new_size=0, position=(0, 0)):
        if type(new_size) is not int:
            raise TypeError("size must be an integer")
        if new_size < 0:
            raise ValueError("size must be >= 0")
        self._size = new_size

        if type(position) is not tuple:
            raise TypeError("position must be a tuple of 2 positive integers")
        if len(position) is not 2:
            raise TypeError("position must be a tuple of 2 positive integers")
        if type(position[0]) is not int or type(position[1]) is not int:
            raise TypeError("position must be a tuple of 2 positive integers")
        self._position = position

    def area(self):
        return self._size * self._size

    @property
    def size(self):
        return self._size

    @size.setter
    def size(self, value):
        if type(value) is not int:
            raise TypeError("size must be an integer")
        if value < 0:
            raise ValueError("size must be >= 0")
        self._size = value

    @property
    def position(self):
        return self._position

    @position.setter
    def position(self, position):
        if type(position) is not tuple:
            raise TypeError("position must be a tuple of 2 positive integers")
        if len(position) is not 2:
            raise TypeError("position must be a tuple of 2 positive integers")
        if type(position[0]) is not int or type(position[1]) is not int:
            raise TypeError("position must be a tuple of 2 positive integers")
        self._position = position

    def my_print(self):
        if self._size == 0:
            print()
            return
        for i in range(self._size):
            for void in range(self.position[0]):
                print(" ", end='')
            for j in range(self._size):
                print("#", end='')
            print()
