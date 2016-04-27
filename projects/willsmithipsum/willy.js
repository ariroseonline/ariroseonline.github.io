
var Db = require('mongodb').Db;
var Connection = require('mongodb').Connection;
var Server = require('mongodb').Server;
var BSON = require('mongodb').BSON;
 
var server = new Server('localhost', 27017, {auto_reconnect: true});
var db = new Db('willyipsum', server);

var fs = require('fs');
var array = fs.readFileSync("lyrics.txt").toString().split("\n")

db.open(function(err, client){
  client.createCollection("lyrics2", function(err, col) {
    client.collection("lyrics2", function(err, col){

      var temp;
      array.forEach(function(elem, index, array1){
        if (elem.substr(elem.length-1) != '?') {
          if (elem.substr(elem.length-1) != '!'){
            
            temp = elem + '.'
            col.insert({line: temp}) 

          }
        } else {
          col.insert({line: elem})

        }

        console.log('inserting', elem)

      });

    });
  });
});


