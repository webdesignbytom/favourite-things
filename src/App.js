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
  const [itemScoreArray, setItemScoreArray] = useState([])
  const [itemScore, setItemScore] = useState(1)
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
  // cant change names for paths?
  return (
    <>
      <NavMenu />

      <main>
        <Routes>
          <Route path='/' element={<Home itemScoreArray={itemScoreArray} setItemScoreArray={setItemScoreArray} itemScore={itemScore} setItemScore={setItemScore}/>}/>

          <Route path='/random' element={<Random itemScoreArray={itemScoreArray} setItemScoreArray={setItemScoreArray} itemScore={itemScore} setItemScore={setItemScore}/>}/>

          <Route path='/top10' element={<TopTen items={items} itemScoreArray={itemScoreArray} setItemScoreArray={setItemScoreArray} itemScore={itemScore} setItemScore={setItemScore}/>}/>

          <Route path='/add' element={<AddItems items={items} setItems={setItems} itemScoreArray={itemScoreArray} setItemScoreArray={setItemScoreArray} itemScore={itemScore} setItemScore={setItemScore}/>}/>

        </Routes>
      </main>
      
    </>
  );
}

export default App;
