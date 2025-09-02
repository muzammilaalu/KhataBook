import { useState } from 'react'
import DashBoard from './components/DashBoard'
import ListGroup from './components/ListGroup'
import Modal from './components/Modal'
import Navbar from './components/Navbar'

const App = () => {
  const [data, setData] = useState([
    { id: 1, text: "salary", money: 30000, typeOfMoney: "Income" }
  ])

  const addData = (text, money, typeOfMoney) => {
    const newItem = {
      id: Date.now(),
      text,
      typeOfMoney,
      money: Number(money)
    }
    setData([newItem, ...data])
  }

  const [isVisible, setIsVisible] = useState(false)

  const [edit, setEdit] = useState({
    transaction: {},
    isEdit: false
  })

  const remove = (id) => {
    setData(data.filter(item => item.id !== id))
  }

  const editData = (transaction) => {
    setEdit({
      transaction: transaction,
      isEdit: true
    })
    setIsVisible(true)
  }

  const updateData = (updatedData) => {
    setData(data.map(transaction =>
      transaction.id === updatedData.id
        ? { ...updatedData, money: Number(updatedData.money) }
        : transaction
    ))
    setEdit({ transaction: {}, isEdit: false })
  }


  return (
    <>
      <Navbar />
      <div className="min-h-screen p-12 relative flex items-start justify-center">
        <Modal addData={addData} isVisible={isVisible} setIsVisible={setIsVisible} edit={edit} updateData={updateData} />
        <div className='w-full'>
          <DashBoard data={data} />
          <ListGroup data={data} remove={remove} editData={editData} />
        </div>
      </div>
    </>
  )
}

export default App
