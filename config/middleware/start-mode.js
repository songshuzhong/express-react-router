/**
 *@author sshuzhong
 *@mailTo <a href="mailto:songshuzhong@bonc.com.cn">Song ShuZhong</a>
 *@Date 2017/9/28$ 9:10$
 *@desc
 */
const webpack = require( 'webpack' );
const serverSideRender = require( '../build-utils/ssr' );

const mode = process.env.NODE_ENV || 'dev';

const webpackConfig = require( '../webpack.config' )('dev');
const webpackDevMiddleware = require( 'webpack-dev-middleware' );
const webpackHotMiddleware = require( 'webpack-hot-middleware' );

const compiler = webpack( webpackConfig );

const DEV_MODE = ( app ) => {
  app.use( webpackDevMiddleware( compiler, { publicPath: webpackConfig.output.publicPath, noInfo: true, stats: { colors: true } } ) );
  app.use( webpackHotMiddleware( compiler ) );
  app.get('*', (req, res) => { serverSideRender( req, res ) } );
};

const PROD_MODE = ( app ) => {
  app.get('*', (req, res) => { serverSideRender( req, res ) } );
};

module.exports = ( app ) => {
  let MODE_CONFIG;
  switch ( mode.trim() ) {
    case 'dev':
    case 'development':
      MODE_CONFIG = DEV_MODE( app );
      break;
    case 'prod':
    case 'default':
    case 'production':
      MODE_CONFIG = PROD_MODE( app );
      break;
  }
  return MODE_CONFIG;
};