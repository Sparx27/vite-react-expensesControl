
const Filters = ({ filter, setFilter }) => {
  return (
    <div className='filtros sombra contenedor'>
      <form>
        <div className='campo'>
          <label>Filter expense</label>

          <select 
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
          >
            <option value=''>-- All --</option>
            <option value='ahorro'>Saving</option>
            <option value='salud'>Health</option>
            <option value='casa'>House</option>
            <option value='comida'>Food</option>
            <option value='ocio'>Leisure</option>
            <option value='suscripciones'>Subscriptions</option>
            <option value='gastos'>Other</option>  
          </select>
        </div>
      </form>
    </div>
  )
}

export default Filters
