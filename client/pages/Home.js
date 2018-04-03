import React, { Component } from 'react'

class Home extends Component {
  constructor( props ) {
    super( props );

    this.state = { data: 1 };
  }

  componentDidMount() {
    let a = function() {
      return new Promise(function(resolve, reject) {
        setTimeout(function() {
          console.log('a')
          resolve('a')
        }, 2000)
      })
    };

    let b = function(data) {
      return new Promise(function(resolve, reject) {
        console.log('b')
        resolve(data +'b')
      })
    };

    let c = function(data) {
      return new Promise(function(resolve, reject) {
        setTimeout(function() {
          console.log('c')
          resolve(data +'c')
        }, 500)
      })
    }

    Promise.all( [ a, b, c ] ).then( data => console.log( data ) ).catch( e => console.log( e ) );
    //this.fetchReducer( [ a, b, c ] ).then( data => console.log( data ) ).catch( e => console.log( e ) );
  }

  fetchReducer( fetchs ) {
    let sequence = Promise.resolve();

    fetchs.forEach( fetch => sequence = sequence.then( fetch ) );
    return sequence;
  }

  render() {
    return (
      <div>123</div>
    );
  }
}

export { Home };
