var arr = [2, 45, 3, 67, 34, 567, 34, 345, 123];
function findLargestNumber(arr) {
    if (arr.length === 0) {
        return "Array is empty";
    }
    
let largest = arr[0]; 
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > largest) {
            largest = arr[i];
        }
    }

    return largest;
}

var largestNumber = findLargestNumber(arr);
console.log("The largest number in the array is:", largestNumber);
