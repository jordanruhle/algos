// function takes in an array and a target sum
// Look for two values in the array that add to the target sum and return an array containing the values
// cannot add the same number to itself.
//  if no two values add to target sum return an empty array 


// function twoNumberSum(array, targetSum) {
//     let obj = {}
//     let output = []
//     for (i of array) {
//         obj[i] = 1;
//     }
//     for (let key in obj) {
//         let pair = targetSum - key
//         if(pair == key){
//             continue
//         }
//         if (obj.hasOwnProperty(pair)) {
//             output.push(parseInt(key), pair)
//             break
//         }
//     }
//     return output
// }

function twoNumberSum(array, targetSum) {
    let obj = {}
    for (i of array) {
        pair = targetSum - i
        if (obj.hasOwnProperty(pair)){
            return([i, parseInt(pair)])
        }
        obj[i] = true
    }
    return []
}

console.log(twoNumberSum([3, 5, -4, 8, 11, 1, -1, 6], 10))