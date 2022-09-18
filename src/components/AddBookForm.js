import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import Loading from './Loading'
import { useSelector, useDispatch } from 'react-redux'

const AddBookForm = (props) => {
  const dispatch = useDispatch()
  const { categoriesState } = useSelector((state) => state)
  const navigate = useNavigate()
  //veri tabanından çektiğimiz kategoriler
  // const [categories, setCategories] = useState(null)
  const [bookName, setBookName] = useState('')
  const [author, setAuthor] = useState('')
  const [isbn, setIsbn] = useState('')
  const [category, setCategory] = useState('')
  //seçtiğimiz kategori

  // useEffect(() => {
  //   axios
  //     .get('http://localhost:3004/categories')
  //     .then((res) => {
  //       console.log(res)
  //       setCategories(res.data)
  //     })
  //     .catch((err) => console.log(err))
  // }, [])

  const handleSubmit = (event) => {
    event.preventDefault()
    if (bookName === '' || author === '' || category === '') {
      alert('Kitap adı, Yazar adı ve Kategori boş bırakılamaz')
      return
    }
    const newBook = {
      id: new Date().getTime(),
      name: bookName,
      author: author,
      isbn: isbn,
      categoryid: category,
    }
    axios
      .post('http://localhost:3004/books', newBook)
      .then((res) => {
        console.log('kitap ekle res', res)
        dispatch({ type: 'ADD_BOOK', payload: newBook })
        setBookName('')
        setAuthor('')
        setIsbn('')
        setCategory('')
        navigate('/')
      })
      .catch((err) => {
        console.log(err)
      })
  }

  if (categoriesState.success !== true) {
    return <Loading />
  }
  return (
    <div className="container my-5">
      <form onSubmit={handleSubmit}>
        <div className="row">
          <div className="col">
            <input
              type="text"
              className="form-control"
              placeholder="Kitap Adı"
              value={bookName}
              onChange={(event) => setBookName(event.target.value)}
            />
          </div>
          <div className="col">
            <input
              type="text"
              className="form-control"
              placeholder="Kitap Yazarı"
              value={author}
              onChange={(event) => setAuthor(event.target.value)}
            />
          </div>
        </div>
        <div className="row my-5">
          <div className="col">
            <input
              type="text"
              className="form-control"
              placeholder="ISBN"
              value={isbn}
              onChange={(event) => setIsbn(event.target.value)}
            />
          </div>
          <div className="col">
            <select
              className="form-select"
              value={category}
              onChange={(event) => setCategory(event.target.value)}
            >
              <option value={''} selected>
                Kategori Seçin
              </option>
              {categoriesState.categories.map((cat) => {
                return (
                  <option key={cat.id} value={cat.id}>
                    {cat.name}
                  </option>
                )
              })}
            </select>
          </div>
        </div>

        <div className="d-flex justify-content-center">
          <button type="submit" className="btn btn-primary w-50">
            KAYDET
          </button>
        </div>
      </form>
    </div>
  )
}

export default AddBookForm
