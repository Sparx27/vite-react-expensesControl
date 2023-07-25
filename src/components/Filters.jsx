
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
            <option value='saving'>Saving</option>
            <option value='health'>Health</option>
            <option value='house'>House</option>
            <option value='food'>Food</option>
            <option value='leisure'>Leisure</option>
            <option value='subscriptions'>Subscriptions</option>
            <option value='other'>Other</option>  
          </select>
        </div>
      </form>
    </div>
  )
}

export default Filters
