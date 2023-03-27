import NewBudget from './NewBudget'
import BudgetControl from './BudgetControl'

const Header = ({ 
  budget, 
  setBudget, 
  expenses,
  setExpenses,
  isBudgetValid, 
  setIsBudgetValid
}) => {
  return (
    <header>
      <h1>Expense Planner</h1>

      {
        !isBudgetValid 
        ? (
            <NewBudget
              budget={budget}
              setBudget={setBudget}
              setIsBudgetValid={setIsBudgetValid}
            /> 
          ) 
        : (
            <BudgetControl 
              budget={budget}
              setBudget={setBudget}
              expenses={expenses}
              setExpenses={setExpenses}
              setIsBudgetValid={setIsBudgetValid}
            />
          )
      }
    </header>
  )
}

export default Header