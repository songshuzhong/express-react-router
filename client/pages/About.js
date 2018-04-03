import React, { Component, PureComponent } from 'react'

class About extends Component {
  constructor( props ) {
    super( props );
    this.state = {
      items: [ 1, 2, 3, 4, 5 ]
    };
    this.handleClick = this.handleClick.bind( this );
  }

  handleClick() {
    let { items } = this.state;
    this.setState( { items } );
  }

  render() {
    return (
      <div>
        <ul>
          { this.state.items.map( i => <li key={ i }>{ i }</li> ) }
        </ul>
        <button onClick={ this.handleClick }>button</button>
      </div>
    )
  }

}

export { About };
