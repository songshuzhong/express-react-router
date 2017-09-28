import React from 'react'

export default ( props ) => ({
  render() {
    const { userName, repoName } = this.props.params
    return (
      <div>
        <h2>{userName} / {repoName}</h2>
      </div>
    )
  }
})
