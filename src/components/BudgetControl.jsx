import { useEffect, useState } from "react"
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar'
import 'react-circular-progressbar/dist/styles.css'
import { toCurrency } from "../helpers"

const BudgetControl = ({ budget, setBudget, expenses, setExpenses, setIsBudgetValid }) => {
  const [spent, setSpent] = useState(0)
  const [available, setAvailable] = useState(0)
  const [spentPercentage, setSpentPercentage] = useState(0)

  useEffect(() => {
    const totalExpenses = expenses.reduce((total, expense) => total + expense.amount, 0)
    const totalAvailable = budget - totalExpenses

    const percentage = ((totalExpenses / budget) * 100).toFixed(2)

    setSpent(totalExpenses)
    setAvailable(totalAvailable)
    setTimeout(() => {
      setSpentPercentage(percentage)
    }, 750)
  }, [expenses])

  const handleResetApp = (e) => {
    const confirm = window.confirm('Would you like to reset the app?')
    if(confirm) {
      setBudget(0)
      setExpenses([])
      setIsBudgetValid(false)
    }
  }

  return (
    <div  className='contenedor-presupuesto contenedor sombra dos-columnas'>
      <div>
        <CircularProgressbar
          styles={buildStyles({
            pathColor: spentPercentage >= 100 ? '#DC2626' : '#3B82F6',
            trailColor: 'F5F5F5',
            textColor: spentPercentage >= 100 ? '#DC2626' : '#3B82F6'
          })}
          value={spentPercentage}
          text={`${spentPercentage}% Spent`}
        />
      </div>

      <div className='contenido-presupuesto'>
        <button className="reset-app" type='button' onClick={handleResetApp}>
          Reset App
        </button>
        <p>
          <span>Budget: </span> {toCurrency(budget)} 
        </p>
        <p>
          <span>Spent: </span> {toCurrency(spent)} 
        </p>
        <p className={`${available < 0 ? 'negativo' : ''}`}>
          <span>Available: </span> {toCurrency(available)} 
        </p>
      </div>
    </div>
  )
}

export default BudgetControl
