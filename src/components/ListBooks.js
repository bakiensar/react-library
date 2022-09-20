import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Loading from './Loading'
import { Link } from 'react-router-dom'
import Modal from './Modal'
import { useSelector, useDispatch } from 'react-redux'

// subscribe olmaya yarar
const ListBooks = (props) => {
  const dispatch = useDispatch()
  const { categoriesState, booksState } = useSelector((state) => state)
  //use selector parametre olarak bir fonksiyon alır bu fonksiyon store içindeki bütün state (veya state.categories) i alır ve bunu geri döndürür
  console.log('categoriesState', categoriesState)
  // const [books, setBooks] = useState(null)
  // const [categories, setCategories] = useState(null)
  const [didUpdate, setDidUpdate] = useState(false)
  const [showModal, setShowModal] = useState(false)
  const [silinecekKitap, setSilinecekKitap] = useState(null)
  const [silinecekKitapIsmi, setSilinecekKitapIsmi] = useState('')

  useEffect(() => {
    // axios
    //   .get('http://localhost:3004/books')
    //   .then((resBook) => {
    //     console.log(resBook)
    //     setBooks(resBook.data)
    //     // axios
    //     //   .get('http://localhost:3004/categories')
    //     //   .then((resCat) => {
    //     //     setCategories(resCat.data)
    //     //   })
    //     //   .catch((err) => console.log('categories err', err))
    //   })
    //   .catch((err) => console.log('books err', err))
  }, [didUpdate])

  const deleteBook = (id) => {
    axios
      .delete(`http://localhost:3004/books/${id}`)
      .then((res) => {
        console.log(res)
        dispatch({ type: 'DELETE_BOOK', payload: id })
        setDidUpdate(!didUpdate)
        setShowModal(false)
      })
      .catch((err) => console.log(err))
  }
  if (booksState.success !== true || categoriesState.success !== true) {
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
          {booksState.books.map((book) => {
            const category = categoriesState.categories.find(
              (cat) => cat.id == book.categoryid,
            )
            return (
              <tr key={book.id}>
                <td>{book.name}</td>
                <td>{book.author}</td>
                <td>{category?.name}</td>
                <td className="text-center">
                  {book.isbn === '' ? '-' : book.isbn}
                </td>
                <td>
                  <div className="btn-group d-flex justify-content-center">
                    <button
                      onClick={() => {
                        setShowModal(true)
                        // deleteBook(book.id)
                        setSilinecekKitap(book.id)
                        setSilinecekKitapIsmi(book.name)
                      }}
                      type="button"
                      className="btn btn-outline-danger btn-sm"
                    >
                      Sil
                    </button>
                    <Link
                      to={`edit-book/${book.id}`}
                      className="btn btn-outline-secondary btn-sm"
                    >
                      DÜZENLE
                    </Link>
                  </div>
                </td>
              </tr>
            )
          })}
        </tbody>
      </table>
      {showModal === true && (
        <Modal
          aciklama={'Silmek İstediğinize Emin misiniz?'}
          title={silinecekKitapIsmi}
          onConfirm={() => deleteBook(silinecekKitap)}
          onCancel={() => setShowModal(false)}
        />
      )}
    </div>
  )
}

export default ListBooks

// {
//   randevular.map((randevu)=>{
//     const arananHasta = Hastalar.find((hasta)=>
//       hasta.id===randevu.hastaId)
//       return
//   })
// }
