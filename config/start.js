/**
 *@author sshuzhong
 *@mailTo <a href="mailto:songshuzhong@bonc.com.cn">Song ShuZhong</a>
 *@Date 2017/9/28$ 9:01$
 *@desc
 */
require( 'babel-register' );
const path = require( 'path' );
const express = require( 'express' );
const app = require( '../server/app' );

require( './middleware/start-mode' )( app );

app.use( express.static( path.join( __dirname, 'public' ), { index: false } ) );


