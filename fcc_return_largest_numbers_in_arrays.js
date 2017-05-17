//05-16-2017 Free Code Camp 
//Return Largest Numbers in Arrays
function largestOfFour(arr) {
  
   var highValues = [];  
  // You can do this!
  for(i=0; i < arr.length; i++) {    

        var _val = arr[i][0]; //get first element
        //loop from the 2nd item in the array
        for(j=1; j<=arr[i].length;j++) {
            if(arr[i][j] > _val) {
                _val = arr[i][j];
            }            
        }

        highValues.push(_val);
    
  }
  
  return highValues;
  
  
}

//largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);
