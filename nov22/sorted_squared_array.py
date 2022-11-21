# function takes in a sorted array of integers (not empty)
# returns a sorted array with the squares of values from the input array

def sortedSquaredArray(array):
    squaredArr = []
    for value in array:
        squaredArr.append(value**2)
    return sorted(squaredArr)


print(sortedSquaredArray([1, 2, 3, 5, 6, 8, 9]))

# time complexity O(n log n)