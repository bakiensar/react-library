import React from 'react'

const Loading = (props) => {
  return (
    <div
      style={{
        width: '100 px',
        height: '100px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
      className="spinner-border text-primary mx-auto my-auto"
      role="status"
    >
      <div>
        <span className="visually-hidden">Loading...</span>
      </div>
    </div>
  )
}

export default Loading
