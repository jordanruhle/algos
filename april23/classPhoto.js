function classPhotos(redShirtHeights, blueShirtHeights) {
  redShirtHeights.sort()
  blueShirtHeights.sort()
  // compare shortest to shortest
  if( redShirtHeights[0] < blueShirtHeights[0] ) {
    // if Red shirt is shorter make sure they all are shorter
    for(let i in redShirtHeights){
      if (redShirtHeights[i] >= blueShirtHeights[i]) {
        return false
      }
    }
      // if Blue shirt is shorter make sure they all are shorter
  } else if ( redShirtHeights[0] > blueShirtHeights[0] ) {
    for(let i in redShirtHeights){
      if (redShirtHeights[i] <= blueShirtHeights[i]) {
        return false
      }
    }
      // if they are equal height return false
  } else {
    return false
  }
  //  if you made it this far either all Blueshirts were shorter or all redShirts were shorter
  return true;
}


let redShirtHeights = [6, 9, 2, 4, 5]
let blueShirtHeights = [5, 8, 1, 3, 4]
console.log(classPhotos(redShirtHeights, blueShirtHeights))