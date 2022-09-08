import React from 'react'
import AddBookForm from '../components/AddBookForm'
import Header from '../components/Header'

const AddBook = (props) => {
  return (
    <div className="container my-5">
      <Header />
      <AddBookForm />
      <span>kitap ekleme</span>
    </div>
  )
}

export default AddBook
