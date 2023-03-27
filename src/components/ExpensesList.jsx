import Expense from './Expense'

const ExpensesList = ({
  expenses, 
  setEditExpense,
  deleteExpense, 
  filter, 
  filteredExpense 
}) => {
  return (
    <div className='listado-gastos contenedor'>

    {
      filter
        ? (
          <>
            <h2>{filteredExpense.length ? 'Expenses' : 'No expenditure has yet been declared in this category'}</h2>
      
            {
              filteredExpense.map( expense => {
                return <Expense
                  key={expense.id}
                  expense={expense}
                  setEditExpense={setEditExpense}
                  deleteExpense={deleteExpense}
                />
              })
            }
          </>
        )
        : (
          <>
            <h2>{expenses.length ? 'Expenses' : 'No expenditure has yet been declared'}</h2>
      
            {
              expenses.map( expense => {
                return <Expense
                  key={expense.id}
                  expense={expense}
                  setEditExpense={setEditExpense}
                  deleteExpense={deleteExpense}
                />
              })
            }
          </>
        )
    }
    </div>
  )
}

export default ExpensesList
