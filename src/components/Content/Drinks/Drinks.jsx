import { Card } from '../Card/Card'
import style from './Drinks.module.css'
export const Drinks = (props) => {
  return (
    <div className={style.content}>
      <Card useApiDrinks={props.useApiDrinks} />
    </div>
  )
}
