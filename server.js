const express  = require( 'express' ),
    bp       = require('body-parser'),
    path     = require( 'path' ),
    root     = __dirname,
    port     = process.env.PORT || 3000,
    app      = express();

app.use( express.static( path.join( root, 'src' )));
app.use( express.static( path.join( root, 'bower_components' )));
app.use(bp.json())

// require( path.join( root, 'server/config/mongoose.js'));
// require("./server/config/routes.js")(app);

app.listen( port, function() {
  console.log( `server running on port ${ port }` );
});