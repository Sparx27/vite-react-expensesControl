import { useState, useEffect } from 'react'
import Header from './components/Header'
import ExpensesList from './components/ExpensesList'
import Filters from './components/Filters'
import Modal from './components/Modal'
import AddBtnIcon from './img/nuevo-gasto.svg'

function App() {
  const [budget, setBudget] = useState(
    Number(window.localStorage.getItem('budget')) ?? 0
  )
  const [expenses, setExpenses] = useState(
    JSON.parse(window.localStorage.getItem('expenses')) ?? []
  )
  const [filter, setFilter] = useState('')
  const [filteredExpense, setFilteredExpense] = useState([])
  const [isBudgetValid, setIsBudgetValid] = useState(false)
  const [modal, setModal] = useState(false)
  const [modalAnimate, setModalAnimate] = useState(false)
  const [editExpense, setEditExpense] = useState({})

  useEffect(() => {
    window.localStorage.setItem('budget', budget) ?? 0
  }, [budget])

  useEffect(() => {
    window.localStorage.setItem('expenses', JSON.stringify(expenses)) ?? []
  }, [expenses])

  useEffect(() => {
    budget > 0 && setIsBudgetValid(true)
  }, [])

  useEffect(() => {
    if(filter) {
      const saveFiltered = expenses.filter(exp => 
        exp.category === filter
      )
      setFilteredExpense(saveFiltered)
    }
  }, [filter])

  useEffect(() => {
    if(Object.keys(editExpense).length > 0) {
      handleModal()
    }
  }, [editExpense])

  const handleModal = (e) => {
    setModal(true)

    setTimeout(() => {
      setModalAnimate(true)
    }, 150)
  }

  const saveExpense = (expense) => setExpenses([...expenses, expense])

  const saveEdit = (saveEdited) => setExpenses(saveEdited)

  const deleteExpense = (expense) => {
    const confirmDelete = window.confirm()

    if(confirmDelete) {
      const { id } = expense
      const saveDelete = expenses.filter(item => 
        item.id !== id
      )
      setExpenses(saveDelete)
    }
  }

  return (
    <div className={modal ? 'fijar' : ''}>
      <Header
        budget={budget}
        setBudget={setBudget}
        expenses={expenses}
        setExpenses={setExpenses}
        isBudgetValid={isBudgetValid}
        setIsBudgetValid={setIsBudgetValid}
      />

      {
        isBudgetValid &&
        <>
          <main>
            <Filters filter={filter} setFilter={setFilter} />

            <ExpensesList
              expenses={expenses}
              setEditExpense={setEditExpense}
              deleteExpense={deleteExpense}
              filter={filter}
              filteredExpense={filteredExpense}
            />
          </main>

          <div className='nuevo-gasto'>
            <img
              src={AddBtnIcon}
              alt='Add expense Icon'
              onClick={handleModal}
            />
          </div>
        </>
      }

      {
        modal && <Modal 
          setModal={setModal} 
          modalAnimate={modalAnimate}
          setModalAnimate={setModalAnimate}
          saveExpense={saveExpense}
          editExpense={editExpense}
          setEditExpense={setEditExpense}
          expenses={expenses}
          saveEdit={saveEdit}
        />
      }
    </div>
  )
}

export default App
