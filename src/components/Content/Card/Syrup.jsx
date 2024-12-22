import React from 'react';
import { useDispatch } from 'react-redux';
import { setSyrup, setDisabled } from '../../../store/drinksSlice';
import style from './Syrup.module.css';

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
];

export const Syrup = ({ drinkId, isDisabled}) => {
  const dispatch = useDispatch();


  const handleSyrupSelection = (syrup) => {
    dispatch(setSyrup({ id: drinkId, syrup}));
    dispatch(setDisabled({id:drinkId,disabled:true}));
  };


  return (
    <div className={style.syrupContainer}>
      {syrupList.map((item, index) => (
        <button
          key={index}
          onClick={() => handleSyrupSelection(item)}
          disabled={isDisabled}
        >
          {item}
        </button>
      ))}
    </div>
  );
};