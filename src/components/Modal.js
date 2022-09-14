import React, { useState } from 'react'

const Modal = (props) => {
  const { onCancel, onConfirm, title, aciklama } = props
  return (
    <button
      onClick={onCancel}
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        backgroundColor: 'rgba(0,0,0,0.3)',
        width: '100vw',
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        cursor: 'default',
      }}
    >
      <div
        style={{
          width: '50%',
          padding: '20px',
          backgroundColor: '#fff',
          borderRadius: '5px',
        }}
      >
        <h1 className="text-center">{title}</h1>
        <p className="text-center">{aciklama}</p>
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <button
            onClick={onCancel}
            className="btn btn-outline-danger btn-sm mx-3"
          >
            CANCEL
          </button>
          <button
            onClick={onConfirm}
            className="btn btn-outline-primary btn-sm"
          >
            CONFIG
          </button>
        </div>
      </div>
    </button>
  )
}

export default Modal
