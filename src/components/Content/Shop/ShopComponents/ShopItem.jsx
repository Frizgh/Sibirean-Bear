import React from 'react'
import style from '../Shop.module.css'
import deleteICO from '../../../../assets/delete.svg'

export const ShopItem = ({
  item,
  count,
  updatePricesInLocalStorage,
  deleteItem,
}) => {
  const increment = () => {
    updatePricesInLocalStorage({ [item.id]: count + 1 })
  }

  const decrement = () => {
    updatePricesInLocalStorage({ [item.id]: Math.max(count - 1, 1) })
  }

  return (
    <div className={style.shopList}>
      <img src={item.img} alt={item.title} />
      <div className={style.itemContainer}>
        <div>
          {item.title} {item.syrup && `(${item.syrup})`} {item.selectedSize} мл
        </div>
        <div className={style.priceAndCountContainer}>
          <div className={style.countContainer}>
            <button onClick={decrement}>-</button>
            <span>{count}</span>
            <button onClick={increment}>+</button>
          </div>
          <div className={style.price}>
            {item.totalPrice || item.price * count} руб.
          </div>
          <button
            className={style.deleteItemsFromBasketShop}
            onClick={() => deleteItem(item.id)}
          >
            <img src={deleteICO} alt="deleteItem" />
          </button>
        </div>
      </div>
    </div>
  )
}
