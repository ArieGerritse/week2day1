var MyMethods = require('./http-functions');
var getHTML = MyMethods.get;
var printHTML = MyMethods.print;
var printHTMLlower = MyMethods.printLower;
var printHTMLupper = MyMethods.printUpper;
var printHTMLreverse = MyMethods.printReverse;
var printHTMLl33t = MyMethods.printL33t;

var options = {
  host: 'sytantris.github.io',
  path: '/http-examples/step6/1337.html'
};

getHTML(options, printHTMLl33t);