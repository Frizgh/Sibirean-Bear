import React from 'react'
import style from './Filter.module.css'
import { selectCategories } from '../../../../store/drinksSlice'
import { useSelector, useDispatch } from 'react-redux'
import { setUniqCategories } from '../../../../store/drinksSlice'
export const Filter = () => {
  const dispatch = useDispatch()

  const buttonCategories = useSelector(setUniqCategories)

  const setCategories = (e) => {
    dispatch(selectCategories(e.target.innerText.toLowerCase()))
  }
  return (
    <div className={style.categoriesContainer}>
      {buttonCategories.map((category, index) => (
        <button key={index} onClick={setCategories}>
          {category.replace(/(?:^|[^\p{L}])(\p{L})/gu, (m) => m.toUpperCase())}
        </button>
      ))}
    </div>
  )
}
