function isValidSubsequence(array, sequence) {
    let arrIdx = 0
    let seqIdx = 0
    while (seqIdx < sequence.length && arrIdx < array.length) {
        if (array[arrIdx] === sequence[seqIdx]) {
            seqIdx++
        }
        arrIdx++
    }
    if (seqIdx > sequence.length - 1) {
        return true
    } else {
        return false
    }
}

isValidSubsequence([5, 1, 22, 25, 6, -1, 8, 10], [1, 6, -1, 10])