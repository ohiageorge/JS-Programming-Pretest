//Array Compaction

var inputArr = [1, 3, 7, 7, 8, 9, 9, 9, 10];

function compactArr(arr) {
    /*This function uses the power of javascript objects to resolve duplicates.
     * Note: the performance of this algorithm has not been tested againt other algorithms in resolving duplicates in javascript
     * but since, the function utilizes javascripts tested intrisic ability to resolve duplicates, i am confident, it will perform faster in 
     * larger arrays
     */
    var object = {} // declare an empty stack
    var result = []  // an empty array to store the result 
    var i ;

    for (i = 0; i < arr.length; i++) { // loop through the array and add the array keys to the empty stack. this automatically resolves duplicates
        object[arr[i]] = 0;
    }

    for (i in object) {  // push object 'unique keys' into the empty array;
        result.push(i);
    }

    return result;
}