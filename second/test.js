// require `request` and the Node `fs` (filesystem) module
var request = require('request');
var fs = require('fs');

request.get('https://i.redd.it/1xsavpjyvdkz.jpg')               // Note 1
      .on('error', function (err) {                                   // Note 2
         throw err;
      })
      .on('response', function (response) {                           // Note 3
        console.log('Response Status Code: ', response.statusCode);
        console.log('Download Started!');
      })
      .on('data', function(response){
        console.log('Downloading....');
      })
      .on('end', function(){
        console.log('Download complete.');
      })
      .pipe(fs.createWriteStream('./future2.jpg'));


                   // Note 4

// Notes:
// 1. `request.get` is equivalent to `request()`
// 2. `request.on('error', callback)` handles any error
// 3. `request.on('response, callback)` handles the response
// 4. What is happening here?