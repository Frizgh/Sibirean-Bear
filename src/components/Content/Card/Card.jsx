import style from './Card.module.css'
import { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment, setPrice } from '../../../store/counterSlice'
import {
  fetchDrinks,
  selectDrinks,
  selectLoading,
  selectError,
} from '../../../store/drinksSlice'

export const Card = () => {
  const [dropMenu, setDropMenu] = useState(false)
  const dispatch = useDispatch()

  const drinks = useSelector(selectDrinks)
  const loading = useSelector(selectLoading)
  const error = useSelector(selectError)
  const counters = useSelector((state) => state.counterDrinks)

  useEffect(() => {
    dispatch(fetchDrinks())
  }, [dispatch])

  if (loading) {
    return <div>Loading...</div>
  }

  if (error) {
    return <div>Error: {error}</div>
  }

  return drinks.map((drink) => {
    const counter = counters[drink.id]?.counter || 0
    const price = counters[drink.id]?.price || 0
    return (
      <div className={style.card} key={drink.id}>
        <div className={style.imgContainer}>
          <img src={drink.image} alt={drink.title} />
        </div>
        <h3>{drink.title}</h3>
        <div className={style.sizeContainer}>
          {drink.size.map((size, index) => (
            <button
              id={index}
              key={index}
              onClick={() =>
                dispatch(setPrice({ id: drink.id, price: drink.price[index] }))
              }
            >
              {size}мл
            </button>
          ))}
        </div>

        <div className={style.optionContainer}>
          <ul className={style.option}>
            <li>
              Сахар: {counter}
              <div className={style.buttonContainer}>
                <button onClick={() => dispatch(decrement({ id: drink.id }))}>
                  -
                </button>
                <button onClick={() => dispatch(increment({ id: drink.id }))}>
                  +
                </button>
              </div>
            </li>
            <li>
              Корица <button>X</button>
            </li>
            <li>
              Сироп
              <button onClick={() => setDropMenu(true)}>+</button>
            </li>
          </ul>
        </div>

        <button className={style.add}>Добавить в корзину:{price} руб.</button>
      </div>
    )
  })
}
