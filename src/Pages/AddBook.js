import React, { useEffect } from 'react'
import AddBookForm from '../components/AddBookForm'
import Header from '../components/Header'

const AddBook = (props) => {
  useEffect(() => {
    document.title = 'Kitap Ekle'
  }, [])
  return (
    <div className="container my-5">
      <Header />
      <AddBookForm />
      <span>kitap ekleme</span>
    </div>
  )
}

export default AddBook
