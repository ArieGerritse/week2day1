exports.get = function getHTML (requestOptions, callback) {

  var https = require('https');

  var giantString = '';


  https.get(requestOptions, function(response){

    response.setEncoding('utf8');

    response.on('data', function(data){

      console.log('Chunck receibed. Length: ', data.lenth);
      giantString += data.toString();

    });

    // console.log(giantString);


    response.on('end', function(){
      console.log('Response stream complete.');
      callback(giantString);
    });
  });

};


exports.print = function (html) {
  console.log(html);
};

exports.printLower = function (html) {
  console.log(html.toLowerCase());
};

exports.printUpper = function (html) {
  console.log(html.toUpperCase());
};

exports.printReverse = function (html) {
  var temp = html.split('').reverse();
  html = temp.join('');
  console.log(html);
};

exports.printL33t = function (html) {
  html.replace(/a/gi,"4");
  // htmo.replace(/er/g,'0r')
  // .replace(/l/g,'1').replace(/o/g,'0').replace(/s/g,'5')
  // .replace(/ck/g,'x').replace(/e/g,'3').replace(/you/g,'j00');

  console.log(html);
};