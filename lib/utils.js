export function getMasonryArray(arr, cols = 1) {
  const newArray = [];

  if (cols === 1) {
    return arr;
  }

  if (cols === 2) {
    newArray[0] = arr.filter((_, index) => index % cols === 0);
    newArray[1] = arr.filter((_, index) => index % cols === 1);
    return newArray;
  }

  if (cols === 3) {
    newArray[0] = arr.filter((_, index) => index % cols === 0);
    newArray[1] = arr.filter((_, index) => index % cols === 1);
    newArray[2] = arr.filter((_, index) => index % cols === 2);
    return newArray;
  }

  if (cols === 4) {
    newArray[0] = arr.filter((_, index) => index % cols === 0);
    newArray[1] = arr.filter((_, index) => index % cols === 1);
    newArray[2] = arr.filter((_, index) => index % cols === 2);
    newArray[3] = arr.filter((_, index) => index % cols === 3);
    return newArray;
  }
}
