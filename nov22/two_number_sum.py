# function takes in an array and a target sum
# Look for two values in the array that add to the target sum and return an array containing the values
# cannot add the same number to itself.
#  if no two values add to target sum return an empty array 


def twoNumberSum(array, targetSum):
    dict = {}
    for i in array:
        pair = targetSum - i
        if pair in dict:
            return [i, pair]
        else: 
            dict[i] = True
    return []

print(twoNumberSum([3, 5, -4, 8, 11, 1, -1, 6], 10))