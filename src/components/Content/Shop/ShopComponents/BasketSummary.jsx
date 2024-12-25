import React from 'react'
import style from '../Shop.module.css'

export const BasketSummary = ({ totalSum }) => {
  return (
    <div className={style.buyBlock}>
      <div className={style.result}>Итого: {totalSum} руб.</div>
      <button>Оплатить</button>
    </div>
  )
}
