function getSum(n1, n2) {   
   var isAnyNegative = function() {   
      return n1 < 0 || n2 < 0;   
   }   
   var promise = new Promise(function(resolve, reject) {   
      if (isAnyNegative()) {   
         reject(Error("Negatives not supported"));   
      }   
      resolve(n1 + n2)
   });   
   return promise;   
} 
getSum(5, 6)   
.then(function (result) {   
   console.log(result);   
},   
function (error) {   
   console.log(error);   
});



const newman = require('newman'),
      fs = require('fs');

newman.run({
    collection: require('C:/Users/Admin/Desktop/Anna.postman_collection.json'),
    reporters: 'cli'
    
}).on('request', function (error, pm) {
    if (error) {
        console.error(error);
    }
    else {
        var jsonData = pm.response.json().data[0].employee_name;
        console.log(jsonData)
        fs.appendFile(`response.txt`, pm.response.stream, function (error) {
            if (error) { 
                console.error(error); 
            }
        });        
    }
});