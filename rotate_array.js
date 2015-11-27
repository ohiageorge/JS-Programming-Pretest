// FUNCTION TO ROTATE AN Array
function rotateArray(arr, num) {
    var i;
    var j;
    var result;
    var arrLen = arr.length;  // store the size of the array

    if (arrLen == 0) { // check arr to be a valid array
        throw new Error("args", " 'arr' required and must be a valid array");
    }
    if ( isNaN(num) || num < 0) { // check num to be a positive number
        throw new Error("Args", "'num' required and must be an positive number.");
    }

    for (i = 0; i < num; i++) {   
        for (j = arrLen - 1; j > 0; j--) {   // iterate through the array and flip it to the left
            res = arr[j];
            arr[j] = arr[j - 1];
            arr[j - 1] = res;
        }
    }
    return arr;
}