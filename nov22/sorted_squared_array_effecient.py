# function takes in a sorted array of integers (not empty)
# returns a sorted array with the squares of values from the input array

def sortedSquaredArray(array):
    squaredArr = []
    for i in array:
        squaredArr.append(0)
    start = 0
    end = len(array) -1
    i = len(squaredArr) -1
    while i >= 0:
        if abs(array[start] )> abs(array[end]):
            squaredArr[i] = array[start]**2
            start += 1
        else:
            squaredArr[i] = array[end]**2
            end -= 1
        i -= 1
    return squaredArr


print(sortedSquaredArray([-2,-1]))

