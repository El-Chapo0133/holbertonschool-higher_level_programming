#!/usr/bin/python3
"""
This module is documented
"""


def matrix_divided(matrix, div):
    """
    This function is documented
    """
    if len(matrix) == 0:
        raise ValueError("matrix cannot be empty")
    if not isinstance(div, int):
        raise TypeError("div must be a number")
    if div == 0:
        raise ZeroDivisionError("division by zero")
    if not isinstance(matrix, list):
        raise TypeError("matrix must be a matrix")
    if not all(isinstance(ele, list) for ele in matrix):
        raise TypeError("matrix must be a matrix")
    row_length = len(matrix[0])
    for x in matrix:
        if not all(isinstance(ele, (int, float)) for ele in x):
            raise TypeError("Values in the matrix must be int/float")
        if len(x) != row_length:
            raise TypeError("Each row of the matrix must have the same size")

    result = []

    for i in range(len(matrix)):
        result.append([])
        for j in range(row_length):
            result[i].append(round(matrix[i][j] / div, 2))

    return result

