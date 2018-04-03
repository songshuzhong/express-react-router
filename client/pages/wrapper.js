import React, { PureComponent } from 'react';

export const propsProxy = ( WrappedComponent ) => {
  return class HOC extends PureComponent {
    render() {
      const newProps = { type: 'HOC' };

      return(
        <div>
          <WrappedComponent { ...this.props } { ...newProps } />
        </div>
      );
    }
  }
};

export const propsExtends = ( WrappedComponent ) => {
  return class HOC extends WrappedComponent {
    test1() {
      return this.test2() + 52;
    }

    componentDidMount() {
      this.setState( { number: 2333 } );
    }

    render() {
      return super.render();
    }
  }
};