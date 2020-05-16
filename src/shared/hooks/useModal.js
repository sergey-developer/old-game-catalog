import {useState} from 'react'

import Modal from '../components/Modal/Modal'

const useModal = () => {
  const [isOpenModal, setOpenModal] = useState(false)

  return {
    isOpenModal,
    setOpenModal,
    Modal
  }
}

export default useModal