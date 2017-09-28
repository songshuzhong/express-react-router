/**
 *@author sshuzhong
 *@mailTo <a href="mailto:songshuzhong@bonc.com.cn">Song ShuZhong</a>
 *@Date 2017/9/27$ 19:16$
 *@desc
 */
const React = require( 'react' );
const { renderToNodeStream  } = require( 'react-dom/server' );
const { match, RouterContext } = require( 'react-router' );
const routes = require( '../../client/pages/routes' );

const serverSideRender = ( req, res ) => (
  match( { routes, location: req.url }, ( err, redirect, props ) => {
    if ( err ) {
      res.status(500).send(err.message)
    } else if ( redirect ) {
      res.redirect( redirect.pathname + redirect.search )
    } else if ( props ) {
      res.write( APP_HEADER() );
      const stream = renderToNodeStream( <RouterContext { ...props } /> );
      stream.pipe( res, { end: false } );
      stream.on( 'end', () => { res.write( APP_FOOTER() ); res.end() } );
    } else {
      res.status( 404 ).send( 'Not Found' )
    }
  })
);

const APP_HEADER = () => (
  "<!doctype html public='storage'><html><meta charset=utf-8/><head><title>My First React Router App</title></head><body><div id='app' />"
);

const APP_FOOTER = () => (
  "<script src='/bundle.js'></script></body></html>"
);

module.exports = serverSideRender;
