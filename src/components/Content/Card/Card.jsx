import style from './Card.module.css'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment, setPrice } from '../../../store/counterSlice'
import { Syrup } from './Syrup'
import {
  fetchDrinks,
  selectDrinks,
  selectLoading,
  selectError,
  selectSyrop,
  syrupMenu,
} from '../../../store/drinksSlice'

export const Card = () => {
  const dispatch = useDispatch()

  const drinks = useSelector(selectDrinks)
  const loading = useSelector(selectLoading)
  const error = useSelector(selectError)
  const syropMenus = useSelector(selectSyrop)
  const stateCounter = useSelector((state) => state.counterDrinks)
  const stateDrinks = useSelector((state) => state.drinks)

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
    const counter = stateCounter[drink.id]?.counter || 0
    const price = stateCounter[drink.id]?.price || 0
    const isSyropMenuOpen = syropMenus[drink.id] || false
    const syrup = stateDrinks[drink.id]?.syrup || ''

    const handleSyrupMenuToggle = () => {
      dispatch(syrupMenu({ id: drink.id, isOpen: !isSyropMenuOpen }))
    }

    return (
      <div className={style.card} key={drink.id}>
        <div className={style.imgContainer}>
          <img src={drink.image} alt={drink.title} />
        </div>
        <h3>{drink.title}</h3>
        <div className={style.sizeContainer}>
          {drink.size.map((size, index) => {
            const drinkPrice =
              drink.price && drink.price[index] !== undefined
                ? drink.price[index]
                : 0
            return (
              <button
                id={index}
                key={index}
                onClick={() =>
                  dispatch(setPrice({ id: drink.id, price: drinkPrice }))
                }
              >
                {size}мл
              </button>
            )
          })}
        </div>

        <div className={style.optionContainer}>
          <ul className={style.option}>
            {!isSyropMenuOpen && (
              <>
                <li>
                  Сахар: {counter}
                  <div className={style.buttonContainer}>
                    <button
                      onClick={() => dispatch(decrement({ id: drink.id }))}
                    >
                      -
                    </button>
                    <button
                      onClick={() => dispatch(increment({ id: drink.id }))}
                    >
                      +
                    </button>
                  </div>
                </li>
                <li>
                  Корица <button>X</button>
                </li>
              </>
            )}
            <li>
              Сироп: {syrup}
              <button onClick={handleSyrupMenuToggle}>
                {isSyropMenuOpen ? 'Назад' : '+'}
              </button>
            </li>
          </ul>
        </div>

        {isSyropMenuOpen && (
          <div>
            <Syrup drinkId={drink.id} />
          </div>
        )}

        <button className={style.add}>
          Добавить в корзину: {syrup ? price + 40 : price} руб.
        </button>
      </div>
    )
  })
}
