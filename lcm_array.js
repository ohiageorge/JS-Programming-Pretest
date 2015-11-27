// LEAST COMMON MULTIPLE

function lcmOfArray(arr) {

    var min, range; 
    range = arr;

    // get minimum value of array
    if (arr[0] > arr[1]) {
        min = arr[1];
    }
    else {
        min = arr[0]
    }

    function gcd(a, b) {  // compute the Greatest common denominator
        return !b ? a : gcd(b, a % b);
    }

    function lcm(a, b) { // use the gcd to compute the LCM given two numbers
        return (a * b) / gcd(a, b);
    }

    var multi = min; // iterate to compute LCM of all numbers in the array
    range.forEach(function (n) {
        multi = lcm(multi, n);
    });

    return multi;
}





