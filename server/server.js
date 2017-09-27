require( 'babel-register' );
const path = require( 'path' );
const express = require( 'express' );
const compression = require( 'compression' );
const { match } = require( 'react-router' );
const routes = require( '../client/pages/routes' );
const serverSideRender = require( '../config/build-utils/ssr' );

const app = express();

app.use(compression());

app.use(express.static(path.join(__dirname, 'public'), {index: false}));

app.get('*', (req, res) => {
  match({ routes, location: req.url }, (err, redirect, props) => {
    if (err) {
      res.status(500).send(err.message)
    } else if (redirect) {
      res.redirect(redirect.pathname + redirect.search)
    } else if (props) {
      const appHtml = serverSideRender( props );
      res.send(renderPage(appHtml))
    } else {
      res.status(404).send('Not Found')
    }
  })
});

function renderPage(appHtml) {
  return `
    <!doctype html public="storage">
    <html>
    <meta charset=utf-8/>
    <title>My First React Router App</title>
    <link rel=stylesheet href=/index.css>
    <div id=app>${appHtml}</div>
    <script src="/bundle.js"></script>
   `
}

const PORT = process.env.PORT || 8080;
app.listen(PORT, function() {
  console.log('Production Express server running at localhost:' + PORT)
});
