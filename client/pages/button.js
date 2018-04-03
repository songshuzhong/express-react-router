import React, { Component, PureCompnent } from 'react';
import PropTypes from 'prop-types';

class Button extends Component {
  render() {
    return (
      <button style={ { background: this.context.color } }>
        { this.props.children }
      </button>
    );
  }
}

Button.contextTypes = {
  color: PropTypes.string
};

class Message extends Component {
  render() {
    return (
      <div>
        { this.props.text }
        <Button color={ this.props.color }>Delete</Button>
      </div>
    );
  }
}

class MessageList extends Component {
  constructor( props ) {
    super( props );
    this.state = { message: [ 1, 2, 3, 4 ] };
  }

  getChildContext() {
    return { color: 'yellow' };
  }

  render() {
    const children =
      this.state.message.map( ( message, index ) =>
        <Message key={ index } text={ message.text } /> );

    return (
      <div>{ children }</div>
    );
  }
}

MessageList.childContextTypes = {
  color: PropTypes.string
};

export { MessageList };