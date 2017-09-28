const express = require( 'express' );

const PORT = process.env.PORT || 5000;

const app = express();

app.listen(PORT, () => {
  console.log('Production Express server running at localhost:' + PORT)
});

module.exports = app;