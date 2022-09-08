import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Loading from './Loading'
import { Link } from 'react-router-dom'

const ListBooks = (props) => {
  const [books, setBooks] = useState(null)
  const [categories, setCategories] = useState(null)
  const [didUpdate, setDidUpdate] = useState(false)

  useEffect(() => {
    axios
      .get('http://localhost:3004/books')
      .then((resBook) => {
        console.log(resBook)
        setBooks(resBook.data)
        axios.get('http://localhost:3004/categories').then((resCat) => {
          setTimeout(
            () =>
              setCategories(resCat.data).catch((caterr) => {
                console.log('caterr:', caterr)
              }),
            1000,
          )
        })
      })
      .catch((bookerr) => {
        console.log(bookerr)
      })
  }, [didUpdate])

  const deleteBook = (id) => {
    axios
      .delete(`http://localhost:3004/books/${id}`)
      .then((res) => {
        console.log(res)
        setDidUpdate(!didUpdate)
      })
      .catch((err) => console.log(err))
  }
  if (books === null || categories === null) {
    return <Loading />
  }
  return (
    <div className="container my-5">
      <div className="m-3 d-flex justify-content-end">
        <Link to="/add-book" className="btn btn-primary ">
          Kitap Ekle
        </Link>
      </div>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">Kitap Adı</th>
            <th scope="col">Yazar</th>
            <th scope="col">Kategori</th>
            <th className="text-center" scope="col">
              ISBN
            </th>
            <th className="text-center" scope="col">
              İşlem
            </th>
          </tr>
        </thead>
        <tbody>
          {books.map((book) => {
            const category = categories.find(
              (cat) => cat.id === book.categoryid,
            )
            return (
              <tr>
                <td>{book.name}</td>
                <td>{book.author}</td>
                <td>{category.name}</td>
                <td className="text-center">
                  {book.isbn === '' ? '-' : book.isbn}
                </td>
                <td>
                  <div
                    className="btn-group d-flex justify-content-center"
                    role="group"
                    aria-label="Basic example"
                  >
                    <button
                      onClick={() => deleteBook(book.id)}
                      type="button"
                      className="btn btn-outline-danger btn-sm"
                    >
                      Sil
                    </button>
                  </div>
                </td>
              </tr>
            )
          })}
        </tbody>
      </table>
    </div>
  )
}

export default ListBooks
