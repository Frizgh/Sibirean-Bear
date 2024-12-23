import './App.css'
import { Header } from './components/Header/Header'
import { Routes, Route } from 'react-router-dom'
import { Drinks } from './components/Content/Drinks/Drinks'
import { Desserts } from './components/Content/Desserts/Desserts'
import { Work } from './components/Content/Work/Work'
import { Shop } from './components/Content/Shop/Shop'

function App() {
  return (
    <>
      <Header />
      <div className="main-content">
        <Routes>
          <Route path="/drinks" element={<Drinks />} />
          <Route path="/desserts" element={<Desserts />} />
          <Route path="/work" element={<Work />} />
          <Route path="/shop" element={<Shop />} />
        </Routes>
      </div>
    </>
  )
}

export default App
