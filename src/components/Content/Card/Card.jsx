import style from './Card.module.css'
import { useEffect,useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrementSugar, incrementSugar, setPrice } from '../../../store/drinksSlice'
import { Syrup } from './Syrup'
import {
  fetchDrinks,
  selectDrinks,
  selectLoading,
  selectError,
  selectSyrop,
  syrupMenu,
  deleteSyrup
} from '../../../store/drinksSlice'

export const Card = () => {
  const [disabledSyrup,setDisabledSyrup] = useState(false)

  const dispatch = useDispatch()

  const drinks = useSelector(selectDrinks)
  const loading = useSelector(selectLoading)
  const error = useSelector(selectError)
  const syropMenus = useSelector(selectSyrop)
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
    const sugar = stateDrinks[drink.id]?.sugar || 0
    const price = stateDrinks[drink.id]?.price || 0
    const isSyropMenuOpen = syropMenus[drink.id] || false
    const syrup = stateDrinks[drink.id]?.syrup || ''
    const isDisabled = stateDrinks[drink.id]?.disabled || false

    const handleSyrupMenuToggle = () => {
      dispatch(syrupMenu({ id: drink.id, isOpen: !isSyropMenuOpen }))
    }

    function addToBasketShop() {
      console.log({id: drink.id, title: drink.title, price , syrup})
    }

    function removeSyrop() {
      dispatch(deleteSyrup({ id: drink.id}))
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
                  Сахар: {sugar}
                  <div className={style.buttonContainer}>
                    <button
                      onClick={() => dispatch(decrementSugar({ id: drink.id }))}
                    >
                      -
                    </button>
                    <button
                      onClick={() => dispatch(incrementSugar({ id: drink.id }))}
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
              Сироп: {syrup}{syrup ?<button onClick={removeSyrop}>X</button>: ''}
              <button onClick={handleSyrupMenuToggle}>
                {isSyropMenuOpen ? 'Назад' : '+'}
              </button>
            </li>
          </ul>
        </div>

        {isSyropMenuOpen && (
          <div>
            <Syrup drinkId={drink.id} isDisabled={isDisabled} />
          </div>
        )}

        <button className={style.add} onClick={addToBasketShop}>
          Добавить в корзину: {price} руб.
        </button>
      </div>
    )
  })
}
