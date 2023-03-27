import { useState } from "react"
import Alert from "./Alert"

const NewBudget = ({ budget, setBudget, setIsBudgetValid }) => {
  const [message, setMessage] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()

    if(!budget || budget < 0) {
      return setMessage('Not valid Budget')
    }

    setMessage('')
    setIsBudgetValid(true)
  }

  return (
    <div className="contenedor-presupuesto contenedor sombra">

      <form className="formulario" onSubmit={handleSubmit}>
        <div className="campo">
          <label>Define Budget</label>

        <input
          className="nuevo-presupuesto"
          type='number'
          placeholder="Add your Budget"
          value={budget > 0 ? budget : ''}
          onChange={(e) => setBudget(Number(e.target.value))}
        />
        </div>

        <input type="submit" value='Add' />

        {message && <Alert type='error'>{message}</Alert>}
      </form>
    </div>
  )
}

export default NewBudget