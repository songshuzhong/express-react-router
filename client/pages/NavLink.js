// modules/NavLink.js
import React, { Component } from 'react'
import { Link } from 'react-router'

export default ( props ) => ({
  render() {
    return <Link {...this.props} activeClassName="active"/>
  }
})
