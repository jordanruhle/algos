# function takes 2 arrays of integers. arrays will not be empty
# determine if the second array is a subsequence of the first array
# a sub sequence doesn't need adjacent values but it does need to have the correct order

def isValidSubsequence(array, sequence):
    arrIdx = 0
    seqIdx = 0
    while arrIdx < len(array) and seqIdx < len(sequence):
        if sequence[seqIdx] == array[arrIdx]:
            seqIdx += 1
        arrIdx += 1
    if seqIdx == len(sequence):
        return True
    return False



print(isValidSubsequence([5, 1, 22, 25, 6, -1, 8, 10], [1, 6, -1, 10]))
