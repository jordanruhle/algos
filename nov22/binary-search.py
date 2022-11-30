# given a sorted array of integers and a target (searched) value
# write a function that searches the array for the target number.
# if the number is found return its index in the array. 
# if the number is not found return -1

# import math


# recursive does not return the index just returns true or false
# recursive is O(log(n)) time and O(log(n)) space can do better without recursion

# def binarySearch(array, target):
#     if len(array) == 0:
#         return -1
#     midPointIdx = len(array) // 2)
#     rightSide = array[midPointIdx+1: len(array)]
#     leftSide = array[:midPointIdx ]
#     if array[midPointIdx] == target:
#         return True
#     if len(array) == 1:
#         return -1
#     if array[midPointIdx] < target:
#         return binarySearch(rightSide, target)
#     if array[midPointIdx] > target: 
#         return binarySearch(leftSide, target)


# does not use recursion results in O(log(n)) time and O(1) space. Space is constant becasue you are adding frames to the stack everytime you call the function
def binarySearch(array, target):
    if len(array) == 0:
        return -1
    leftPointer = 0
    rightPointer = len(array) - 1
    while leftPointer <= rightPointer:
        midIdx = (leftPointer + rightPointer)// 2
        if array[midIdx] == target:
            return midIdx
        elif array[midIdx] < target:
            leftPointer = midIdx + 1
        else:
            rightPointer = midIdx - 1
    return -1



print(binarySearch([], 52))
print(binarySearch([2, 3, 8, 52, 52, 65, 103, 111, 156], 52))
print(binarySearch([1, 3, 5, 6, 13, 52], 52))
print(binarySearch([1, 3, 5, 6, 13, 52, 56, 57, 58], 52))
print(binarySearch([1, 3, 5, 6, 13, 52, 56, 57, 58], 53))
