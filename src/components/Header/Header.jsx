import logo from '../../assets/logo.png'
import vk from '../../assets/Socity/vk.svg'
import tg from '../../assets/Socity/tg.svg'
import { Link } from 'react-router-dom'

import style from './Header.module.css'

export const Header = () => {
  return (
    <nav className={style.navigation}>
      <img src={logo} alt="logo" className={style.logo} />
      <ul className={style.navMain}>
        <Link to="/drinks" className={style.menu}>
          Напитки
        </Link>
        <Link to="/desserts" className={style.menu}>
          Десерты
        </Link>
        <Link to="/work" className={style.menu}>
          Работа в Сибирском Мишке
        </Link>
      </ul>
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
    </nav>
  )
}
