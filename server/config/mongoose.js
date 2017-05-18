const mongoose = require('mongoose');

mongoose.createConnection('mongodb://localhost/LunchTimeDatabase');
mongoose.connect('mongodb://localhost/LunchTimeDatabase');

const	fs = require('fs');
		path = require('path');
		models_path = path.join(__dirname, './../models');
reg = new RegExp( ".js$", "i" ),

fs.readdirSync( models_path ).forEach( function( file ) {
  if( reg.test( file ) ) {
    require( path.join( models_path, file ) );
  }
});