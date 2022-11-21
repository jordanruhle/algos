
function twoNumberSum(array, targetSum) {
    let obj = {}
    let output = []
    for (i of array) {
        obj[i] = 1;
    }
    for (let key in obj) {
        let pair = targetSum - key
        if(pair == key){
            continue
        }
        if (obj.hasOwnProperty(pair)) {
            output.push(parseInt(key), pair)
            break
        }
    }
    return output
}

console.log(twoNumberSum([3, 5, -4, 8, 11, 1, -1, 6], 10))