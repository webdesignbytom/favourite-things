import { useState, useEffect } from 'react';
import { Routes, Route, Link } from 'react-router-dom'

import NavMenu from './components/NavMenu'
import Home from './Home'
import TopTen from './TopTen';
import Random from './Random';
import AddItems from './AddItems';

import './styles/App.css';

function App() {
  const [items, setItems] = useState([])
  // const [randomIndex, setRandomIndex] = useState(null)
  
  useEffect(()=>{
    fetch(`http://localhost:4000/items`)
      .then((response) => {
        console.log('response', response)
        return(
          response.json()
        )
      })
      .then((data) => {
        console.log('return data', data)
        setItems(data)
      })
  }, [])

  return (
    <>
      <NavMenu />

      <main>
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/random' element={<Random />}/>
          <Route path='/top10' element={<TopTen items={items}/>}/>
          <Route path='/add' element={<AddItems />}/>
        </Routes>
      </main>
      
    </>
  );
}

export default App;
