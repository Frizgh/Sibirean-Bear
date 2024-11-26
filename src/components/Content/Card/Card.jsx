import coffe from '../../../assets/coffe.png'
import style from './Card.module.css'
import { useState } from 'react'
import axios from 'axios'

export const Card = (props) => {
  const { data, error } = props.useApiDrinks()
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

  console.log(data)
  return data.map((data) => {
    return (
      <div className={style.card} key={data.id}>
        <div className={style.imgContainer}>
          <img src={data.image} alt="" />
        </div>
        <h3>{data.title}</h3>
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
        <button className={style.add}>Добавить в корзину</button>
      </div>
    )
  })
}
