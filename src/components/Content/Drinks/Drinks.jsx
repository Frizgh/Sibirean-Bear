import { Card } from '../Card/Card'
import style from './Drinks.module.css'
import { Filter } from './Filter/Filter'
export const Drinks = () => {
  return (
    <div className={style.content}>
      <Filter />
      <div className={style.card}>
        <Card />
      </div>
    </div>
  )
}
