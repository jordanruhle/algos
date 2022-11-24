def nonConstructibleChange(coins):
    coins.sort()
    highestCount = 0
    for num in coins:
        if num <= highestCount + 1:
            highestCount += num
        if num > highestCount + 1:
            return highestCount +1
    return highestCount +1


print(nonConstructibleChange([5, 7, 1, 1, 2, 3, 22]))

