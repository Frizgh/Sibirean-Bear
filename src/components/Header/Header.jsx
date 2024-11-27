import logo from '../../assets/logo.png'
import vk from '../../assets/Socity/vk.svg'
import tg from '../../assets/Socity/tg.svg'
import cart from '../../assets/cart.png'
import { Link } from 'react-router-dom'

import style from './Header.module.css'
import { useState } from 'react'

export const Header = () => {
  const [searchText, setSearchText] = useState('')
  return (
    <nav className={style.navigation}>
      <div className={style.imgContainer}>
        <img src={logo} alt="logo" className={style.logo} />
      </div>

      <ul className={style.navMain}>
        <li>
          <Link to="/drinks" className={style.menu}>
            Напитки
          </Link>
        </li>

        <li>
          <Link to="/desserts" className={style.menu}>
            Десерты
          </Link>
        </li>

        <li>
          <Link to="/work" className={style.menu}>
            Работа в Сибирском Мишке
          </Link>
        </li>
      </ul>

      <div className={style.searchContainer}>
        <input
          type="search"
          name="search"
          className={style.search}
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
        />

        <button>Поиск</button>

        <div>
          <img src={cart} alt="" />
        </div>

        <ul className={style.socityContent}>
          <li>
            <a href="https://vk.com/mishkacoffee38">
              <img src={vk} alt="" className={style.socityIMG} />
            </a>
          </li>

          <li>
            <a href="https://t.me/MishkaCoffeeBot">
              <img src={tg} alt="" className={style.socityIMG} />
            </a>
          </li>
        </ul>
      </div>
    </nav>
  )
}
