import React from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { useEffect, useState } from 'react'
import Header from '../components/Header'
import Loading from '../components/Loading'
import axios from 'axios'

const EditCategory = () => {
  const { CategoriesState } = useSelector((state) => state)
  const dispatch = useDispatch()
  const params = useParams()
  const navigate = useNavigate()

  //   const [category, setCategory] = useState('')
  //   const [showModal, setShowModal] = useState(false)

  if (CategoriesState.success == false) {
    return <Loading />
  }
  return (
    <div>
      <Header />
    </div>
  )
}

export default EditCategory
