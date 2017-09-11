var https = require('https');

function getAndPrintHTML (requestOptions) {

  var giantString;


  https.get(requestOptions, function(response){

    response.setEncoding('utf8');

    response.on('data', function(data){

      console.log('Chunck receibed. Length: ', data.lenth);
      giantString += data.toString();

    });

    // console.log(giantString);


    response.on('end', function(){
      console.log(giantString);
      console.log('Response stream complete.');
    });
  });

  // console.log('HEEEEEEEEERRREEEEEE');
  // console.log(giantStrings);
}

var options = {
  host: 'sytantris.github.io',
  path: '/http-examples/step2.html'
};

getAndPrintHTML(options);