import React from 'react'
import { useSelector } from 'react-redux'
import Loading from './Loading'
import { Link } from 'react-router-dom'

const ListCategories = () => {
  const { categoriesState } = useSelector((state) => state)

  if (categoriesState.success == false) {
    return <Loading />
    //emniyet sibobu:)
  }
  return (
    <div className="container my-5">
      <div className="m-3 d-flex justify-content-end">
        <Link to="/add-category" className="btn btn-primary ">
          Kategori Ekle
        </Link>
      </div>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">Kategori Adı</th>

            <th className="text-center" scope="col">
              İşlem
            </th>
          </tr>
        </thead>
        <tbody>
          {categoriesState.categories.map((category) => {
            return (
              <tr key={category.id}>
                <td>{category?.name}</td>

                <td>
                  <div className="btn-group d-flex justify-content-center">
                    <button
                      onClick={() => {
                        // setShowModal(true)
                        // // deleteBook(book.id)
                        // setSilinecekKitap(book.id)
                        // setSilinecekKitapIsmi(book.name)
                      }}
                      type="button"
                      className="btn btn-outline-danger btn-sm"
                    >
                      Sil
                    </button>
                    <Link
                      to={`edit-category/${category.id}`}
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
      {/* {showModal === true && (
        <Modal
          aciklama={'Silmek İstediğinize Emin misiniz?'}
          title={silinecekKitapIsmi}
          onConfirm={() => deleteBook(silinecekKitap)}
          onCancel={() => setShowModal(false)}
        />
      )} */}
    </div>
  )
}

export default ListCategories
