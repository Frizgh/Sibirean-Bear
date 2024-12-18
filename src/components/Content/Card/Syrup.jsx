import React from 'react'

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
  const handleSyrupSelection = (syrup) => {
    console.log(`Выбран сироп: ${syrup} для напитка с ID: ${drinkId}`)
  }
  return (
    <div>
      {syrupList.map((item, index) => (
        <button key={index} onClick={() => handleSyrupSelection(item)}>
          {item}
        </button>
      ))}
    </div>
  )
}
