var Mustache = require('./mustache')
, util = require('util')
, fs = require('fs');

var view = {
  name: "Joe", 
  say_hello: function(){ return "hello" }
};

var template = fs.readFileSync('./hello.mustache', 'utf-8');
var html = Mustache.to_html(template, view);

util.puts(html);
