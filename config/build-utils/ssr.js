/**
 *@author sshuzhong
 *@mailTo <a href="mailto:songshuzhong@bonc.com.cn">Song ShuZhong</a>
 *@Date 2017/9/27$ 19:16$
 *@desc
 */
const React = require( 'react' );
const { renderToString } = require( 'react-dom/server' );
const { RouterContext } = require( 'react-router' );

const serverSideRender = ( props ) => (
  renderToString( <RouterContext {...props}/> )
);

module.exports = serverSideRender;
