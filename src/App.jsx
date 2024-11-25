import './App.css'
import { Header } from './components/Header/Header'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Drinks } from './components/Content/Drinks/Drinks'
import { Desserts } from './components/Content/Desserts/Desserts'
import { Work } from './components/Content/Work/Work'

function App() {
  return (
    <>
      <Header />
      <div className={StylePropertyMap.content}>
        <Routes>
          <Route path="/drinks" element={<Drinks />} />
          <Route path="/desserts" element={<Desserts />} />
          <Route path="/work" element={<Work />} />
        </Routes>
      </div>
    </>
  )
}

export default App
