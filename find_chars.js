/*
* Two versions of a function that takes two strings and returns a string that contains only the characters found 
* in string1
*/

function find_char_n_n(string1, string2) {  // version N*N order

	result = []; // empty stack to store the matched chars
	var i, j;

	str1Arr = string1.split(); // convert string to array
	str2Arr = string2.split(); //convert string to array;

	for(i in str1Arr){  // compare string 2 to sring 1 and return only chars in 2 that matches chars in string 1
		for(j in str2Arr){
			if(i == j)
				result.push(str1Arr[i]);
		}
	}
	return result;
}


function find_char_n(string1, string2){ // version N order
    var i;
    var result = [] // empty stack to store the matched values
    var str2Arr = string2.split();
    var str1Arr = string1.split();
    for(i in str1Arr){
        if(str2Arr.filter(function(item){  // filter chars in string2 that matches chars in string 1
            i == item;
            result.push(str1Arr[i]);  
        }));
    };
    return result;
}