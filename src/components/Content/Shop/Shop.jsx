import React, { useState, useEffect } from 'react'
import style from './Shop.module.css'

export const Shop = () => {
  const [shopItems, setShopItems] = useState([])
  const [counts, setCounts] = useState({})

  const generateUniqueId = () => {
    return Date.now() + Math.random()
  }

  useEffect(() => {
    const shopList = localStorage.getItem('shops')
    if (shopList) {
      const items = JSON.parse(shopList).map((item) => ({
        ...item,
        id: generateUniqueId(),
      }))
      setShopItems(items)
      const initialCounts = {}
      items.forEach((item) => {
        initialCounts[item.id] = item.count || 1
      })
      setCounts(initialCounts)
    }
  }, [])

  const updateLocalStorage = (items) => {
    localStorage.setItem('shops', JSON.stringify(items))
  }

  const increment = (id) => {
    setCounts((prevCounts) => {
      const newCount = prevCounts[id] + 1
      const updatedCounts = {
        ...prevCounts,
        [id]: newCount,
      }
      updatePricesInLocalStorage(updatedCounts)
      return updatedCounts
    })
  }

  const decrement = (id) => {
    setCounts((prevCounts) => {
      const newCount = Math.max(prevCounts[id] - 1, 1)
      const updatedCounts = {
        ...prevCounts,
        [id]: newCount,
      }
      updatePricesInLocalStorage(updatedCounts)
      return updatedCounts
    })
  }

  const updatePricesInLocalStorage = (updatedCounts) => {
    const updatedItems = shopItems.map((item) => {
      const count = updatedCounts[item.id] || item.count
      const price = item.price
      return {
        ...item,
        count: count,
        totalPrice: price * count,
      }
    })
    setShopItems(updatedItems)
    updateLocalStorage(updatedItems)
  }

  return (
    <div className={style.shopContainer}>
      <div className={style.infoWrapper}>
        {shopItems.map((item) => (
          <div key={item.id} className={style.shopList}>
            <img src={item.img} alt={item.title} />
            <div className={style.itemContainer}>
              <div>
                {item.title} {item.syrup ? `(${item.syrup})` : ''}{' '}
                {item.selectedSize} мл
              </div>
              <div className={style.priceAndCountContainer}>
                <div className={style.countContainer}>
                  <button onClick={() => decrement(item.id)}>-</button>
                  <span>{counts[item.id] || 1}</span>
                  <button onClick={() => increment(item.id)}>+</button>
                </div>
                <div className={style.price}>
                  {item.totalPrice || item.price * (counts[item.id] || 1)} руб.
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className={style.buyBlock}>
        <div className={style.result}>
          Итого:
          {shopItems.reduce(
            (sum, item) => sum + (item.totalPrice || item.price * item.count),
            0
          )}
          руб.
        </div>
        <button>Оплатить</button>
      </div>
    </div>
  )
}
