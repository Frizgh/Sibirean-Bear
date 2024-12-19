import React from 'react'
import { useDispatch } from 'react-redux'
import { setSyrup } from '../../../store/drinksSlice'
import style from './Syrup.module.css'

// Список доступных сиропов
const syrupList = [
  'Кленовый',
  'Апельсиновый',
  'Мандариновый',
  'Карамельный',
  'Черничный',
  'Какао',
  'Лимонный',
  'Лаймовый',
  'Миндальный',
  'Ананасовый',
]

export const Syrup = ({ drinkId }) => {
  const dispatch = useDispatch()

  const handleSyrupSelection = (syrup) => {
    dispatch(setSyrup({ id: drinkId, syrup }))
  }

  return (
    <div className={style.syrupContainer}>
      {syrupList.map((item, index) => (
        <button key={index} onClick={() => handleSyrupSelection(item)}>
          {item}
        </button>
      ))}
    </div>
  )
}
