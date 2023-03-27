import {
  LeadingActions,
  SwipeableList,
  SwipeableListItem,
  SwipeAction,
  TrailingActions  
} from 'react-swipeable-list'
import 'react-swipeable-list/dist/styles.css'
import { generateDate } from "../helpers"

import SavingIcon from '../img/icono_ahorro.svg'
import HouseIcon from '../img/icono_casa.svg'
import FoodIcon from '../img/icono_comida.svg'
import OtherIcon from '../img/icono_gastos.svg'
import LeisureIcon from '../img/icono_ocio.svg'
import HealthIcon from '../img/icono_salud.svg'
import SubscriptionsIcon from '../img/icono_suscripciones.svg'

const Expense = ({expense, setEditExpense, deleteExpense}) => {
  const { name, amount, category, date } = expense
  const iconDictionary = {
    ahorro: SavingIcon,
    casa: HouseIcon,
    comida: FoodIcon,
    gastos: OtherIcon,
    ocio: LeisureIcon,
    salud: HealthIcon,
    suscripciones: SubscriptionsIcon
  }

  const leadingActions = () => (
    <LeadingActions>
      <SwipeAction onClick={() => setEditExpense(expense)}>
        Edit
      </SwipeAction>
    </LeadingActions>
  )

  const trailingActions = () => (
    <TrailingActions>
      <SwipeAction onClick={() => deleteExpense(expense)}>
        Delete
      </SwipeAction>
    </TrailingActions>
  )

  return (
    <SwipeableList>
      <SwipeableListItem
        leadingActions={leadingActions()}
        trailingActions={trailingActions()}
      >
        <div className="gasto sombra">
          <div className='contenido-gasto'>
            <img 
              src={iconDictionary[category]}
              alt={String(category)}
            />
            <div className='descripcion-gasto'>
              <p className='categoria'>{category}</p>
              <p className='nombre-gasto'>{name}</p>
              <p className='fecha-gasto'>
                Added on: {''}
                <span>{generateDate(date)}</span>
              </p>
            </div>
          </div>

          <p className="cantidad-gasto">${amount}</p>
        </div>
      </SwipeableListItem>
    </SwipeableList>
  )
}

export default Expense