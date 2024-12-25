import React, { useState, useEffect } from 'react'
import style from './Shop.module.css'
import { ShopItem } from './ShopComponents/ShopItem'
import { BasketSummary } from './ShopComponents/BasketSummary'

export const Shop = () => {
  const [shopItems, setShopItems] = useState([])
  const [counts, setCounts] = useState({})

  useEffect(() => {
    const shopList = localStorage.getItem('shops')
    if (shopList) {
      const items = JSON.parse(shopList)
      setShopItems(items)
      const initialCounts = items.reduce((acc, item) => {
        acc[item.id] = item.count || 1
        return acc
      }, {})
      setCounts(initialCounts)
    }
  }, [])

  const updateLocalStorage = (items) => {
    localStorage.setItem('shops', JSON.stringify(items))
  }

  const updatePricesInLocalStorage = (updatedCounts) => {
    const updatedItems = shopItems.map((item) => ({
      ...item,
      count: updatedCounts[item.id] || item.count,
      totalPrice: item.price * (updatedCounts[item.id] || item.count),
    }))
    setShopItems(updatedItems)
    updateLocalStorage(updatedItems)
  }

  const clearBasketShop = () => {
    localStorage.removeItem('shops')
    setShopItems([])
    setCounts({})
  }

  const deleteItem = (id) => {
    const updatedItems = shopItems.filter((item) => item.id !== id)
    setShopItems(updatedItems)
    updateLocalStorage(updatedItems)
    setCounts((prevCounts) => {
      const newCounts = { ...prevCounts }
      delete newCounts[id]
      return newCounts
    })
  }

  const totalSum = shopItems.reduce(
    (sum, item) => sum + (item.totalPrice || item.price * item.count),
    0
  )

  return (
    <div className={style.shopContainer}>
      <div className={style.infoWrapper}>
        <button onClick={clearBasketShop} className={style.clearAll}>
          Очистить корзину
        </button>
        {shopItems.map((item) => (
          <ShopItem
            key={item.id}
            item={item}
            count={counts[item.id] || 1}
            updatePricesInLocalStorage={updatePricesInLocalStorage}
            deleteItem={deleteItem}
          />
        ))}
      </div>
      <BasketSummary totalSum={totalSum} />
    </div>
  )
}
