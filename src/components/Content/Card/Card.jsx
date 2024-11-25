import coffe from '../../../assets/coffe.png'
import style from './Card.module.css'
import { useState } from 'react'

export const Card = () => {
  const [count, setCount] = useState(0)
  const [dropMenu, setDropMenu] = useState(false)
  const [line, setLine] = useState(false)

  const increment = () => {
    setCount(count + 1)
  }
  const decrement = () => {
    if (count > 0) {
      setCount(count - 1)
    }
  }
  return (
    <div className={style.card}>
      <div className={style.imgContainer}>
        <img src={coffe} alt="" />
      </div>
      <h2>Coffe</h2>
      <div>
        <div>
          <ul className={style.option}>
            <li>
              Сахар : {count}
              <div className={style.buttonContainer}>
                <button onClick={decrement}>-</button>
                <button onClick={increment}>+</button>
              </div>
            </li>
            <li className={line ? style.del : ''}>
              Корица{' '}
              {!line ? (
                <button onClick={() => setLine(true)}>X</button>
              ) : (
                <button onClick={() => setLine(false)}>+</button>
              )}
            </li>
            <li>
              Сироп
              <button onClick={() => setDropMenu(true)}>+</button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}
