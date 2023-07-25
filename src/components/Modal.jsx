import { useEffect, useState } from 'react'
import CloseModal from '../img/cerrar.svg'
import Alert from './Alert'
import {generateID, generateDate} from '../helpers/index'

const Modal = ({
  setModal, 
  modalAnimate, 
  setModalAnimate, 
  saveExpense, 
  editExpense,
  setEditExpense,
  expenses,
  saveEdit
}) => {
  const [name, setName] = useState('')
  const [amount, setAmount] = useState(0)
  const [category, setCategory] = useState('')
  const [message, setMessage] = useState('')

  useEffect(() => {
    if(Object.keys(editExpense).length > 0) {
      setName(editExpense.name)
      setAmount(editExpense.amount)
      setCategory(editExpense.category)
    }
  }, [editExpense])

  const handleModalClose = (e) => {
    setModalAnimate(false)
    setEditExpense({})

    setTimeout(() => {
      setModal(false)
    }, 300)
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    if([name, amount, category].includes('')) {
      setMessage('All fields are required')

      setTimeout(() => {
        setMessage('')
      }, 3000)
      return
    }

    const newExpense = {
      id: generateID(), 
      name, 
      amount, 
      category,
      date: Date.now()
    }
    saveExpense(newExpense)
    setName('')
    setAmount(0)
    setCategory('')
    handleModalClose()
  }

  const handleEdit = (e) => {
    e.preventDefault()

    if([name, amount, category].includes('')) {
      setMessage('All fields are required')

      setTimeout(() => {
        setMessage('')
      }, 3000)
      return
    }

    const editedExpense = {
      id: editExpense.id,
      name,
      amount,
      category,
      date: generateDate(Date.now())
    }
    const addEditedExpense = expenses.map(expense => {
      return expense.id === editedExpense.id ? editedExpense : expense
    })

    saveEdit(addEditedExpense)
    handleModalClose()
  }


  return (
    <div className='modal'>
      <div className="cerrar-modal">
        <img
          src={CloseModal}
          alt='Close Modal Icon'
          onClick={handleModalClose}
        />
      </div>

      <form
        className={`formulario ${modalAnimate ? 'animar' : 'cerrar'}`}
        onSubmit={Object.keys(editExpense).length > 0
          ? handleEdit
          : handleSubmit  
        }
      >
        <legend>
          {
            Object.keys(editExpense).length > 0 
              ? 'Edit Expense'
              : 'New Expense'
          }
        </legend>

        <div className='campo'>
          <label htmlFor='name'>Expense Name</label>
          <input
            id='name'
            type='text'
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        <div className='campo'>
          <label htmlFor='amount'>Amount</label>
          <input
            id='amount'
            type='number'
            value={amount > 0 ? amount : ''}
            onChange={(e) => setAmount(Number(e.target.value))}
          />
        </div>

        <div className='campo'>
          <label htmlFor='category'>Category</label>
          <select
            id='category'
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          >
            <option value=''>-- Select --</option>
            <option value='saving'>Saving</option>
            <option value='heakth'>Health</option>
            <option value='house'>House</option>
            <option value='food'>Food</option>
            <option value='leisure'>Leisure</option>
            <option value='subscriptions'>Subscriptions</option>
            <option value='other'>Other</option>       
          </select>
        </div>

        <input
          type='submit'
          value={Object.keys(editExpense).length > 0 ? 'Save Changes' : 'Add Expense'}
        />

        {
          message && <Alert type='error'>
            {message}
          </Alert>
        }
      </form>
    </div>
  )
}

export default Modal
